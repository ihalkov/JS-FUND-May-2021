function muOnline(input) {
    let rooms = input.split('|');

    let health = 100;
    let bitcoins = 0;
    let bestRoom = 1;

    while (rooms.length > 0 && health > 0) {
        let curr = rooms.shift();
        let [command, num] = curr.split(' ');
        num = Number(num);
        if (command === 'potion') {
            getPotion(num);
        } else if (command === 'chest') {
            getChest(num);
        } else {
            facingMonster(command, num);
        }

        bestRoom += 1;
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

    function facingMonster(command, num) {
        health -= num;
        if (health > 0) {
            console.log(`You slayed ${command}.`);
        } else {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${bestRoom}`);
        }
    }

    function getChest(number) {
        bitcoins += number;
        console.log(`You found ${number} bitcoins.`);
    }

    function getPotion(number) {
        let initHealth = health;

        health += number;
        if (health > 100) {
            health = 100;
        }
        let healed = health - initHealth;
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${health} hp.`);
    }

}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
// muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');