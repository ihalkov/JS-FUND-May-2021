function computerStore(input = []) {
    let totalNoTax = 0;
    let command = '';

    while (input.length > 0) {
        command = input.shift();
        if (command === 'special' || command === 'regular') {
            break;
        }

        let currPrice = Number(command);
        if (currPrice < 0) {
            console.log('Invalid price!');
            continue;
        }

        totalNoTax += currPrice;
    }

    let taxesTotal = totalNoTax * 0.2;
    let totalPrice = totalNoTax + taxesTotal;

    if (command === 'special') {
        totalPrice = totalPrice * 0.9;
    }

    print(totalNoTax, taxesTotal, totalPrice);

    function print(totalNoTax, taxesTotal, totalPrice) {
        if (totalPrice > 0) {
            console.log('Congratulations you\'ve just bought a new computer!');
            console.log(`Price without taxes: ${totalNoTax.toFixed(2)}$`);
            console.log(`Taxes: ${taxesTotal.toFixed(2)}$`);
            console.log('-----------');
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
        } else {
            console.log('Invalid order!');
        }
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);

computerStore([
    'regular'
]);