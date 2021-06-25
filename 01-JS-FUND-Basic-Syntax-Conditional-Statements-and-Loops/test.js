function theatrePromotions(typeOfDay, age) {
    let ageOfPerson = parseInt(age);
    if (ageOfPerson >= 0 && ageOfPerson <= 18) {
        if (typeOfDay === "Weekday") {
            console.log("12$");
        } else if (typeOfDay === "Weekend") {
            console.log("15$");
        } else if (typeOfDay === "Holiday") {
            console.log("5$");
        }
    } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
        if (typeOfDay === "Weekday") {
            console.log("18$");
        } else if (typeOfDay === "Weekend") {
            console.log("20$");
        } else if (typeOfDay === "Holiday") {
            console.log("12$");
        }
    } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
        if (typeOfDay === "Weekday") {
            console.log("12$");
        } else if (typeOfDay === "Weekend") {
            console.log("15$");
        } else if (typeOfDay === "Holiday") {
            console.log("10$");
        }
    } else {
        console.log("Error!");
    }
}

function theatrePromotions(typeOfDay, age) {
    age = Number(age);
    if (age >= 0 && age <= 18) {
        if (typeOfDay === "Weekday") {
            return "12$";
        } else if (typeOfDay === "Weekend") {
            return "15$";
        } else if (typeOfDay === "Holiday") {
            return "5$";
        }
    } else if (age > 18 && age <= 64) {
        if (typeOfDay === "Weekday") {
            return "18$";
        } else if (typeOfDay === "Weekend") {
            return "20$";
        } else if (typeOfDay === "Holiday") {
            return "12$";
        }
    } else if (age > 64 && age <= 122) {
        if (typeOfDay === "Weekday") {
            return "12$";
        } else if (typeOfDay === "Weekend") {
            return "15$";
        } else if (typeOfDay === "Holiday") {
            return "10$";
        }
    }
    return 'Error!';
}