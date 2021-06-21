let obj = {
    "Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
};
let arr = ["Close Facebook", "Open StackOverFlow", "Open Google", "Open Google", "Close Google"];


// let obj = {
//     "Browser Name":"Mozilla Firefox",
//     "Open Tabs":["YouTube"],
//     "Recently Closed":["Gmail", "Dropbox"],
//     "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// };
// let arr = ["Open Wikipedia", "Clear History and Cache", "Open Twitter"];

let browserHistory = Object.assign({}, obj);
let actions = arr.slice(0);

browserHistory = processActions(browserHistory, actions);
print(browserHistory);

function print(obj) {
    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}

function processActions(browserHistory, actions) {
    for (const line of actions) {
        if (line === 'Clear History and Cache') {
            browserHistory = clear(browserHistory);
            continue;
        }
    
        let ind = line.indexOf(' ');
        let command = line.substring(0, ind);
        let site = line.substring(ind += 1);
    
        if (command === 'Close') {
            browserHistory = closeSite(browserHistory, site);
        }
    
        if (command === 'Open') {
            browserHistory = openSite(browserHistory, site);
        }
    
        browserHistory = addToLog(line);
    }

    return browserHistory;
}

function openSite(obj, site) {
    obj['Open Tabs'].push(site);
    return obj;
}

function addToLog(line) {
    obj['Browser Logs'].push(line);
    return obj;
}

function closeSite(obj, site) {
    if (obj['Open Tabs'].includes(site)) {
        let ind = obj['Open Tabs'].indexOf(site);
        let closedSite = obj['Open Tabs'].splice(ind, 1);
        obj['Recently Closed'].push(closedSite[0]);
    }

    return obj;
}

function clear(obj) {
    obj['Open Tabs'] = [];
    obj['Recently Closed'] = [];
    obj['Browser Logs'] = [];
    return obj;
}
