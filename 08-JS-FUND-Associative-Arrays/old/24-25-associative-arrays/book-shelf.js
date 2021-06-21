function bookShelf(input = []) {
    function fillShelves(input) {
        let shelves = {};
        for (const line of input) {
            if (line.includes('->')) {
                shelves = addShelf(shelves, line);
            } else if (line.includes(':')) {
                shelves = addBook(shelves, line);
            }
        }
        return shelves;
    }

    function addBook(obj = {}, str) {
        let [title, newStr] = str.split(': ');
        let [author, genre] = newStr.split(', ');
        for (const shelf of Object.keys(obj)) {
            if (obj[shelf].genre === genre) {
                obj[shelf].books.push(`${title}: ${author}`);
            }
        }

        return obj;
    }

    function addShelf(obj = {}, str) {
        let [id, genre] = str.split(' -> ');
        if (!obj.hasOwnProperty(id)) {
            obj[id] = {
                genre: genre,
                books: []
            };
        }
        return obj;
    }

    function getOutput(obj = {}) {
        let sortByCount = Object.entries(obj).sort((a, b) => b[1].books.length - a[1].books.length);
        let output = [];
        for (const [shelf, shelfInfo] of sortByCount) {
            output.push(`${shelf} ${shelfInfo.genre}: ${shelfInfo.books.length}`);
            let booksSorted = shelfInfo.books.sort((a, b) => a.localeCompare(b));
            for (const book of booksSorted) {
                output.push(`--> ${book}`);
            }
        }
        return output.join('\n');
    }
    
    let shelves = fillShelves(input);
    console.log(getOutput(shelves));
}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);