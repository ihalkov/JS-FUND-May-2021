function softUniReception(input = []) {
    input = input.map(Number);
    let totalPeople = input.pop();
    let [em1, em2, em3] = input;
    let peoplePerHour = em1 + em2 + em3;

    let time = 0;
    while (totalPeople > 0) {
        time++;
        if (time % 4 === 0) {
            continue;
        }

        totalPeople -= peoplePerHour;
    }

    console.log(`Time needed: ${time}h.`);
}

