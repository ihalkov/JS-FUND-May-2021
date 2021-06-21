function stringIterator(str = '') {
    let result = str.split(' ');
    const iterator1 = result[Symbol.iterator]();

    // Once created, an iterator object can be iterated explicitly by repeatedly calling next().
    for (let i = 0; i < result.length; i++) {
        console.log(iterator1.next().value);
    }
    for (let i = 0; i < result.length; i++) {
        console.log(iterator1.next().value);
    }
}

// stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.');

function stringIteratorTest(str = '') {
    function makeRangeIterator(start = 0, end = Infinity, step = 1) {
        let nextIndex = start;
        let iterationCount = 0;

        const rangeIterator = {
            next: function () {
                let result;
                if (nextIndex < end) {
                    result = { value: nextIndex, done: false }
                    nextIndex += step;
                    iterationCount++;
                    return result;
                }
                return { value: iterationCount, done: true }
            }
        };
        return rangeIterator;
    }

    const it = makeRangeIterator(1, 10, 2);

    let result = it.next();
    while (!result.done) {
        console.log(result.value); // 1 3 5 7 9
        result = it.next();
    }

    console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

}

stringIteratorTest('Et cillum do voluptate cillum ut cupidatat aliqua.');