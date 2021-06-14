function oddOccurrences(input = '') {
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (const word of words) {
        if (map.has(word)) {
            let value = map.get(word);
            map.set(word, value + 1);
        } else {
            map.set(word, 1);
        }
    }

    let entries = Array.from(map);
    let output = [];
    for (const [key, value] of entries) {
        if (value % 2 !== 0) {
            output.push(key);
        }
    }

    return output.join(' ');
}

// console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
