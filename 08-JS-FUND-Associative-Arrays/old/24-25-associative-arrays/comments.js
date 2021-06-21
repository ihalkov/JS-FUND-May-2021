function processComments(input = []) {
    function printResult(map) {
        let tokens = Array.from(map.entries());
        let sortByComments = tokens.sort((a, b) => b[1].totalComments - a[1].totalComments);
        for (const line of sortByComments) {
            let [article, obj] = [line[0], line[1]];
            console.log(`Comments on ${article}`);
            let sortUsers = Object.keys(obj);
            sortUsers.shift();
            sortUsers.sort((a, b) => a.localeCompare(b));
            for (const user of sortUsers) {
                let userComments = map.get(article)[user];
                for (const [title, comment] of userComments) {
                    console.log(`--- From user ${user}: ${title} - ${comment}`);
                }
            }
        }
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
            comments.get(articleName)['totalComments'] += 1;
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

    printResult(comments);
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