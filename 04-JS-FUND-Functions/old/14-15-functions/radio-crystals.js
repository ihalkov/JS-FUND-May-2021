function radioCrystals(input) {
    let cut = crystal => crystal / 4;
    let lap = crystal => crystal * 0.8;
    let grind = crystal => crystal - 20;
    let etch = crystal => crystal - 2;
    let xRay = crystal => crystal + 1; // only once
    let transportingAndWashing = crystal => Math.floor(crystal); // after each different operations


    let target = input[0];
 
    for (let i = 1; i < input.length; i++) {
        let chunk = input[i]; // can be more than only one, but later will check all of them
        let operationsOrder = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray'];
        
        let currentThickness = chunk;
        console.log(`Processing chunk ${currentThickness} microns`);
        // good
        processingCurrentChunk(currentThickness, operationsOrder);
    }

    function processingCurrentChunk(chunk, operationsOrder) {
        let currentThickness = chunk;
        let toSwitch = true;
        let count = -1;
        while (currentThickness >= target - 1) {
            count += 1;
            if (currentThickness === target) {
                printCurrentOperationResult(operationsOrder[0], count);
                // if (input.length > 2) {
                //     printTransportAndWashing();
                // }
                console.log(`Finished crystal ${currentThickness} microns`);
                break;
            }

            if (currentThickness < 100 && operationsOrder.length >= 4 && toSwitch) {
                // switch lap and grind, because grind is removing more after that
                switchLapAndGrind(operationsOrder);
                toSwitch = false;
            }

            let currentOperation = operationsOrder[0];
            let tempResult;
            tempResult = giveTempResult(currentOperation, currentThickness);
            // currentThickness = giveCurrentThickness(tempResult, currentThickness);
            if (tempResult >= target - 1) {
                currentThickness = tempResult;
            } else {
                let operation = operationsOrder.shift();
                if (count > 0) {
                    printCurrentOperationResult(operation, count);
                    printTransportAndWashing();
                    currentThickness = transportingAndWashing(currentThickness);
                }

                count = -1;
            }
        }
    }

    // function giveCurrentThickness(tempResult, currentThickness) {
    //     let thickness;
    //     if (tempResult >= target - 1) {
    //         thickness = tempResult;
    //     } else {
    //         let operation = operationsOrder.shift();
    //         function printCurrentOperationResult() {
    //             console.log(`${operation}`);
    //         }
    //         thickness = transportingAndWashing(currentThickness);
    //     }

    //     return thickness;
    // }
    
    function printTransportAndWashing() {
        console.log('Transporting and washing');
    }

    function printCurrentOperationResult(operation, count) {
        console.log(`${operation} x${count}`);
    }

    function giveTempResult(currentOperation, thickness) {
        let result;
        let currentThickness = thickness;
        switch (currentOperation) {
            case 'Cut':
                result = cut(currentThickness);
                break;
            case 'Lap':
                result = lap(currentThickness);
                break;
            case 'Grind':
                result = grind(currentThickness);
                break;
            case 'Etch':
                result = etch(currentThickness);
                break;
            case 'X-ray':
                result = xRay(currentThickness);
                break;
        }
        return result;
    }

    function switchLapAndGrind(operationsOrder) {
        let temp = operationsOrder[1];
        operationsOrder[1] = operationsOrder[2];
        operationsOrder[2] = temp;
    }
}

// radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);
// radioCrystals([100, 101.9]);
// radioCrystals([100, 99]);



// let cut = crystal => crystal / 4;
// let lap = crystal => crystal * 0.8;
// let grind = crystal => crystal - 20;
// let etch = crystal => crystal - 2;
// let xRay = crystal => crystal + 1; // only once
// let transportingAndWashing = crystal => Math.floor(crystal); // after each different operations

// cut(4);
// lap(2);
// grind(123);
// etch(12);
// xRay(5);
// transportingAndWashing(123.2);

// https://github.com/Tuscann/Softuni/blob/master/JS%20core/JavaScript%20Fundamentals/06.Function%20and%20Arrow%20Functions/09.%20Radio%20Crystals.js