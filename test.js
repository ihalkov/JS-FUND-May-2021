function mergeArraysDeclarativeWay(strArrOne = [], strArrTwo = []) {
    let resultArr = [];

    strArrOne.map((element, i) => {
        i % 2 === 0 ?
            resultArr.push(Number(element) + Number(strArrTwo[i])) :
            resultArr.push(element + strArrTwo[i]);
    });
    return resultArr.join(" - ");
}

console.log(mergeArraysDeclarativeWay(['1', '2', '3'], ['4', '3', '5']));