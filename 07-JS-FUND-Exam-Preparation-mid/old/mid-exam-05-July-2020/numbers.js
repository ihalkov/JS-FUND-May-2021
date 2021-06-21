function top5Numbers(input) {
    let numbers = input.split(' ').map(Number);

    let average = findAvgOfNumbers(numbers);
    let sorted = numbers.sort((a, b) => b - a);

    let filtered = returnAboveAverage(sorted);
    print(filtered);

    function returnAboveAverage(sorted) {
        let filtered = [];
        let count = 1;
        for (const num of sorted) {
            if (num <= average || count > 5) {
                break;
            }
    
            count += 1;
            filtered.push(num);
        }

        return filtered;
    }

    function print(arr) {
        let output = 'No';
        if (arr.length > 0) {
            output = arr.join(' ');
        }

        console.log(output);
    }

    function findAvgOfNumbers(arr) {
        let avg = arr.slice(0);
        let length = avg.length;

        avg = avg.reduce((acc, curr) => acc + curr);
        avg = avg / length;

        return avg;
    }
}

top5Numbers('10 20 30 40 50');
top5Numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
top5Numbers('1');
top5Numbers('-1 -2 -3 -4 -5 -6');