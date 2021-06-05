function sortAnArrayBy2Criteria(input = []) {
    let sorted = input.sort((a, b) => {
        let res = a.length - b.length;
        if (res === 0) {
            return a.localeCompare(b, 'en', {
                sensitivity: 'base'
            });
        }
        return res;
    });
    return sorted.join('\n');
}

// console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));
// console.log(sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));