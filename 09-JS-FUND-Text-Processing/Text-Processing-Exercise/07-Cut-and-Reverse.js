function cutAndReverse(str = '') {
    let halfLength = str.length / 2;
    let [firstHalf, secondHalf] = [str.substring(0, halfLength), str.substring(halfLength)];
    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');
    return [firstHalf, secondHalf].join('\n');
}

// console.log(cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
// console.log(cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'));