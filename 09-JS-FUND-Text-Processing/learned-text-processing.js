// strings are immutable (read-only) sequences of characters

// let ch = str[2];
// ch = str.chartAt(2);
// Both declarations are the same

// text.replace(); replaces the first occurrence

function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    return text;
}

// startsWith()
// endsWith()

// padStart()
// padEnd()