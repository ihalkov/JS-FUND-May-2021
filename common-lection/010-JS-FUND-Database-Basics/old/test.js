function mxdiflg(arr1 = [], arr2 = []) {
    if (arr1.length === 0 || arr2.length === 0) {
        return -1;
    }

    arr1.sort((a, b) => a.length - b.length);
    arr2.sort((a, b) => b.length - a.length);

    let max = arr2[0].length - arr1[0].length;
    let currMax = arr1[arr1.length - 1].length - arr2[arr2.length - 1].length;
    if (currMax > max) {
        max = currMax;
    }
    return max;
}

console.log(mxdiflg(['asdasddfgdfgfdgas', 'sa', 'asdasf', 'fagg'], ['s', 'wee', 'as', 'asdvdr', 'sadfsaasae', 'sadcea']));
console.log(mxdiflg(['sadcea'], ['ea']));