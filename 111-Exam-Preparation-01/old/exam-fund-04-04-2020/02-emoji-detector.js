function emojiDetector(input = []) {
    let text = input[0];
    let coolThreshold = text.split('')
        .filter(ch => {
            let currNum = Number(ch);
            if (currNum || currNum === 0) {
                return currNum;
            }
        })
        .reduce((acc, curr) => Number(acc) * Number(curr));

    let getValidEmojis = (text) => {
        let pattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
        let valid = [];
        while ((curr = pattern.exec(text)) !== null) {
            valid.push(curr[0]);
        }
        return valid;
    };
    let validEmojis = getValidEmojis(text);

    let coolEmojis = [];
    for (const line of validEmojis) {
        let isCool = (line = '', threshold) => {
            let emoji = line.substring(2, line.length - 2);
            let coolness = 0;
            for (const ch of emoji) {
                coolness += ch.charCodeAt(0);
            }
    
            if (coolness > threshold) {
                return true;
            }
            return false;
        };

        if (isCool(line, coolThreshold)) {
            coolEmojis.push(line);
        }
    }
    return getOutput();
    
    function getOutput() {
        let output = [];
        output.push(`Cool threshold: ${coolThreshold}`);
        output.push(`${validEmojis.length} emojis found in the text. The cool ones are:`);
        if (coolEmojis.length > 0) {
            output.push(...coolEmojis);
        }
        return output.join('\n');
    }
}
// 60 min 
// +37
// 60 pts
console.log(emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]));

console.log(emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
]));

console.log(emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]));