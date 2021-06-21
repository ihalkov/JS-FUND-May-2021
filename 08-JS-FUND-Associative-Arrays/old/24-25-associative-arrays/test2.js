let card = '2S';
    let [pow, mul] = getPowMul(card);

    function getPowMul(card = '') {
        let splitInd = card.length - 1;
        let [power, multiplier] = [card.substring(0, splitInd), card.substring(splitInd)];

        return [power, multiplier];
    }