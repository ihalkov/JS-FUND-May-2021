let coords = [[0, 0], [0, 1], [1, 1], [2, 2], [0, 3]];

coords = getValidCoords(coords);

console.log();

function getValidCoords(coords) {

    // coords = coords.map(curr => { // iterate over everything
    let index = 0;
    while (index < coords.length) {
        let curr = coords[index];
        let x = curr[0];
        let y = curr[1];

        let result = coords.filter(c => {
            let currX = c[0];
            let currY = c[1];
            // dont matter the arrangement of coords just we need the bombs to explode
            let diffX = Math.abs(x - currX);
            let diffY = Math.abs(y - currY);
            if (diffX > 1 || diffY > 1) {
                return c;
            }
        });

        coords = [curr, ...result];
        index += 1;
    }

    return coords.reverse();
}
