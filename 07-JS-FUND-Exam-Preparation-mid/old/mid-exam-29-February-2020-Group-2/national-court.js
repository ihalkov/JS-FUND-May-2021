function nationalCourt(input = []) {
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
        // totalPeople -= em1;
        // totalPeople -= em2;
        // totalPeople -= em3;
    }

    console.log(`Time needed: ${time}h.`);
}

nationalCourt(
    [5, 6, 4, 20]
);

nationalCourt([1, 2, 3, 45]);

nationalCourt([3, 2, 5, 40]);