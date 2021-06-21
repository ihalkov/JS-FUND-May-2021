function adAstra(input = []) {
    let foodStrings = input[0] + '';
    let regex = /(\#[A-z\s]+\#\d{2}\/\d{2}\/\d{2}\#\d+\#)|(\|[A-z\s]+\|\d{2}\/\d{2}\/\d{2}\|\d+\|)/g;
    // let regex = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    // have to make if its # to be on all places the same, or if its | to be everywhere the same
    foodStrings = foodStrings.match(regex);

    let days = 0;
    let foodInfo = [];
    // let calories = [];
    let sumOfCalories = 0;

    if (foodStrings !== null && foodStrings !== undefined) {
        foodInfo = getFoodInfo(foodStrings);

        let calories = foodInfo.map(x => Number(x[2]));
        sumOfCalories = calories.reduce((acc, curr) => acc + curr);
        days = sumOfCalories / 2000;
    }

    print(days, foodInfo);

    function print(days, foodInfo) {
        console.log(`You have food to last you for: ${Math.floor(days)} days!`);

        for (const curr of foodInfo) {
            console.log(`Item: ${curr[0]}, Best before: ${curr[1]}, Nutrition: ${curr[2]}`);
        }
    }

    function getFoodInfo(arr) {
        let update = [];
        for (const food of arr) {
            let currFood = getFood(food);
            update.push(currFood);
        }

        return update;

        function getFood(str) {
            let ch = str[0];
            str = str.substring(1, str.length - 1);
            let arr = str.split(ch);
            return arr;
        }
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);

// https://regex101.com/r/0792GL/9
// (\#[A-z\s]*\#\d{2}\/\d{2}\/\d{2}\#\d*\#)|(\|[A-z\s]*\|\d{2}\/\d{2}\/\d{2}\|\d*\|)