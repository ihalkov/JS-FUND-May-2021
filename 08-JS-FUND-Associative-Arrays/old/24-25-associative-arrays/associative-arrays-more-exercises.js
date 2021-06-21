function garage(input = []) {
    let storage = new Map();

    for (const line of input) {
        let [number, carProperties] = line.split(' - ');

        storage = addGarage(number);

        carProperties = carProperties.split(', ');
        storage = putNewCar(carProperties, number);
    }

    print(storage);

    function print(storage) {
        for (const [garageNumber, cars] of storage) {
            console.log(`Garage № ${garageNumber}`);
            for (const car of cars) {
                console.log(`--- ${car.join(', ')}`);
            }
        }
    }

    function putNewCar(carProperties, number) {
        let currCarr = [];
        for (const curr of carProperties) {
            let [key, value] = curr.split(': ');
            currCarr.push(`${key} - ${value}`);
        }

        storage.get(number).push(currCarr);
        return storage;
    }

    function addGarage(number) {
        if (!storage.has(number)) {
            storage.set(number, []);
        }

        return storage;
    }
}

// garage([
//     '1 - color: blue, fuel type: diesel',
//     '1 - color: red, manufacture: Audi',
//     '2 - fuel type: petrol',
//     '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
// ]);

function armies(input = []) {
    let armies = new Map();
    for (const line of input) {
        armies = addLeader(line, armies);
        armies = addArmy(line, armies);
        armies = addCount(line, armies);
        armies = defeated(line, armies);
    }

    let sortByTotal = sortByTotalCount(armies);
    printOutput();

    function printOutput() {
        for (const kvp of sortByTotal) {
            let gladName = kvp[0];
            let currObj = kvp[1];
            let total = currObj.totalCount;

            let objEntries = Object.entries(currObj);
            let sortEntries = objEntries.sort((a, b) => {
                return b[1] - a[1];
            });
            console.log(`${gladName}: ${total}`);
            for (const [army, count] of sortEntries) {
                if (army !== 'totalCount' && army !== 'increaseTotal') {
                    console.log(`>>> ${army} - ${count}`);
                }
            }

        }
    }

    function sortByTotalCount(map) {
        let entries = Array.from(map.entries());
        let sorted = entries.sort((a, b) => {
            let totalDescSort = b[1].totalCount - a[1].totalCount;
            return totalDescSort;
        });

        return sorted;
    }

    function addCount(line, armies) {
        if (line.includes('+')) {
            let [searchedArmy, count] = line.split(' + ');
            count = Number(count);

            for (const kvp of armies.entries()) {
                let glad = kvp[0];
                let armyData = kvp[1];

                for (const key in armyData) {
                    let currArmy = key;
                    let armyCount = armyData[key];
                    if (currArmy === searchedArmy) {
                        armyCount += count;
                        armies.get(glad)[currArmy] = armyCount;
                        armies.get(glad).increaseTotal(count);
                    }
                }
            }
        }

        return armies;
    }

    function addArmy(line, armies) {
        if (line.includes(':')) {
            let [leader, str] = line.split(': ');
            if (armies.has(leader)) {
                let [armyName, armyCount] = str.split(', ');
                armyCount = Number(armyCount);
                armies.get(leader)[armyName] = armyCount;

                armies.get(leader).increaseTotal(armyCount);
            }
        }

        return armies;
    }

    function defeated(line, armies) {
        if (line.includes('defeated')) {
            let leader = line.split(' defeated')[0];
            if (armies.has(leader)) {
                armies.delete(leader);
            }
        }

        return armies;
    }

    function addLeader(line, armies) {
        if (line.includes('arrives')) {
            let leader = line.split(' arrives')[0];
            armies.set(leader, { totalCount: 0, increaseTotal: function (count) { this.totalCount = this.totalCount + count; } });
        }

        return armies;
    }
}

// armies([
//     'Rick Burr arrives',
//     'Fergus: Wexamp, 30245',
//     'Rick Burr: Juard, 50000',
//     'Findlay arrives',
//     'Findlay: Britox, 34540',
//     'Wexamp + 6000',
//     'Juard + 1350',
//     'Britox + 4500',
//     'Porter arrives',
//     'Porter: Legion, 55000',
//     'Legion + 302',
//     'Rick Burr defeated',
//     'Porter: Retix, 3205'
// ]);

function processComments(input = []) {
    let users = [];
    let articles = [];
    let comments = new Map();

    for (const line of input) {
        if (line.includes('user')) {
            users = addUser(line, users);
        } else if (line.includes('article')) {
            articles = addArticle(line, articles);
        } else if (line.includes('posts on')) {
            comments = storeComment(comments, line, users, articles);
        }
    }

   

    console.log();


    function printResult() {

    }

    function storeComment(comments, line, users, articles) {
        let [userName, post] = line.split(' posts on ');
        let [articleName, commentData] = post.split(': ');
        let [title, content] = commentData.split(', ');

        let condOne = hasUser(userName, users);
        let condTwo = hasArticle(articleName, articles);

        if (!condOne || !condTwo) {
            return comments;
        }

        comments = putComment(comments, userName, articleName, comments);
        return comments;


        function putComment(comments, userName, articleName, comments) {
            if (!comments.has(articleName)) {
                comments.set(articleName, { totalComments: 0 });
            }

            if (!comments.get(articleName).hasOwnProperty(userName)) {
                comments.get(articleName)[userName] = [];
            }

            comments.get(articleName)[userName].push([title, content]);
            comments.get(articleName)[totalComments] += 1;
            return comments;
        }

        function hasArticle(name, articles) {
            if (articles.includes(name)) {
                return true;
            }

            return false;
        }

        function hasUser(name, users) {
            if (users.includes(name)) {
                return true;
            }

            return false;
        }
    }

    function addArticle(line, articles) {
        let articleName = line.split('article ')[1];
        if (!articles.includes(articleName)) {
            articles.push(articleName);
        }

        return articles;
    }

    function addUser(line, users) {
        let userName = line.split('user ')[1];
        if (!users.includes(userName)) {
            users.push(userName);
        }

        return users;
    }
}

processComments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);