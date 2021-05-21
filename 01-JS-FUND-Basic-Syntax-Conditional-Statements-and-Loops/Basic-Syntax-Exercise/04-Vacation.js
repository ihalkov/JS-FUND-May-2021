function vacation(groupCount, type, day) {
    let days = {
        'Friday': 0,
        'Saturday': 1,
        'Sunday': 2
    };
    let table = {
        'Students': [8.45, 9.80, 10.46],
        'Business': [10.90, 15.60, 16],
        'Regular': [15, 20, 22.50]
    };

    let ind = days[day];
    let singlePrice = table[type][ind];
    let disc = 1;

    if (type === 'Students' && groupCount >= 30) {
        disc = 0.85;
    } else if (type === 'Business' && groupCount >= 100) {
        groupCount -= 10;
    } else if (type === 'Regular' && (groupCount >= 10 && groupCount <= 20)) {
        disc = 0.95;
    }

    let total = singlePrice * groupCount * disc;
    return `Total price: ${total.toFixed(2)}`;
}

// console.log(vacation(30,
//     "Students",
//     "Sunday"
// ));
// console.log(vacation(40,
//     "Regular",
//     "Saturday"
// ));