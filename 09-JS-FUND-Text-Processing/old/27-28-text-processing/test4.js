console.log(filterExample());

function filterExample() {
    let str = 'aaaaabbbbbcddddeeeedsssaaa';
    let edited = str.split('').filter((ch, ind, arr) => ch !== arr[ind + 1]).join('');
    return edited;
}