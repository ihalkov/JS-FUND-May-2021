function theLift(input = []) {
    let passengers = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);
    let totalWagons = wagons.length;
    const maxInWagon = 4;

    let capacity = totalWagons * maxInWagon;

    wagons = putOnLift(wagons);

    let currState = wagons.reduce((acc, curr) => acc + curr);

    print(wagons);

    function print(wagons) {
        if (passengers > 0) {
            console.log(`There isn't enough space! ${passengers} people in a queue!`);
        } else if (currState < capacity) {
            console.log(`The lift has empty spots!`);
        }
    
        console.log(`${wagons.join(' ')}`);
    }

    function putOnLift(wagons) {
        for (const ind in wagons) {
            let currPeople = wagons[ind];
            let currSpace = maxInWagon - currPeople;
            if (passengers < currSpace) {
                currSpace = passengers;
            }

            passengers -= currSpace;
            wagons[ind] += currSpace;
        }

        return wagons;
    }
}


theLift([
    "15",
    "0 0 0 0 0"
]);

theLift([
    "20",
    "0 2 0"
]);