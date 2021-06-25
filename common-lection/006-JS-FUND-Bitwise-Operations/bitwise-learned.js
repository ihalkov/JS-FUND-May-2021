// not much used
// number * num system ^ pos

// literal means the type of variable, egg. (5, 'string', boolean (true/false)),
    // the way we write the value of the variable

// 1. What is a bit?
// 2. Numerals Systems
// 3. Storing Information
// 4. Bitwise Operations

// Bit
// unit used in computing
// smallest unit for information
// have only two values either 0 or 1
    // anything with two separate states can store 1 bit
        // logical valuse (true/false)
        // algebraic signs (+/-)
        // activation states (on/off)

// Numerals Systems
    // Decimal, Binary, Hexadecimal
    // sys for expressing numbers
    // diff systems represent real and integer numbers
    // each system has a base (e.g. 2, 10, 16)

    // Decimal Numbers
        // (base 10)
        // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        // 401 = pos 0 = 1, pos 1 = 0, pos 2 = 4, pos is the power
        // 401 = 4*10^2 + 0*10^1 + 1*10^0
        // 400 + 0 + 1

// have to say the numbers how they are on particular num system

// number * num system ^ pos
    // Binary (base 2)
        // 5 -> 101b
        // 101b = 1*2^2 + 0*2^1 + 1*2^0
        // we have to say it from left to right
        // 4 + 0 + 1 = 5

        // 101 = 4 2 1, if 0 not count so 4 + 1 = 5
        // 1001010 = 64 0 8 0 2 0

// decimal to binary
// dec = 11 / 2 = 5 (1)
// 5 / 2 = 2 (1)
// 2 / 2 = 1 (0)
// 1 / 2 = 0 (1)

function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
}

// this adds in-front of the string
// bin = (decNum % 2) + bin;

// imagine binary system like water meter, but only with 0 and 1
// 0
// 1
// 10
// 11
// 100
// 101
// 110
// 111
// 1000
// 1001
// 1010
// 1011
// 1100
// 1101
// 1110
// 1111

// Octal numbers system

// From decimal to binary
// let number = 11;
// let bin = number.toString(2);

// console.log(bin);

// From binary to decimal
// let binaryStr = '1010';
// let binToDec = parseInt(binaryStr, 2);
// console.log(binToDec);

// let binaryNumber = 0b1011; literal for binary number
// its always showing it like decimal 11 in this example

// Hexadecimal numbers
// 0-9 and A, B, C, ... F
// ip address ->> physical address 6 hexadecimal numbers
// 0x literal

// #112233 RGB
// #FFFFFF (white)
// #000000 (black)

// easy to convert from hex to binary
// and from binary to hex
// you can write more value with less digits (more compact is hex)
// Each hex digit corresponds to a sequence of 4 binary digits
// A2E3F = 1010 0010 1110 0011 1111

// Storing Information
// Integer and Floating-Point Numbers and Text

// Representing numbers
    // integer numbers are sequence of bits
    // the sign is determined by the
        // Most Significant Bit (MSB)
        // leading 0 means positive number
        // leading 1 means negative number
        // example: 8 bit numbers
        // 0xxxxxxxb > 0 // 00010010b = 18
        // 00000000b = 0
        // 1xxxxxxxb < 0 // 10010010b = -110
        // most left bit is for the sign

    // Positive 8-bit numbers
        // the value is the decimal value of their last 7 bits (XXXXXXX)
    // Negative 8-bit numbers
        // have the format (1YYYYYYY)
        // the value is 128 (2^7) minus the decimal value of YYYYYYY
    // Positive and negative integers
        // The largest 8-bit integer is:
            // 127 = (2^7 - 1) = 0111 1111b
        // The smallest 8-bit integer is:
            // -128 = (-2^7) = 1000 0000b
        // The largest 32-bit integer is:
            // 2147483647 = (2^31 - 1) = 0111...1111b
        // The smallest negative 32-bit integer is:
            // -2147483647 = (-2^31) = 1000...0000b
        // 1 and 0 is inverted in PC for representing the types
        
    // Real Numbers
        // floating points

    // String is an array of characters

    // Bitwise Operators
        // ~ turn all 0 to 1 and all 1 to 0
        // Like ! for boolean expressions but bit by bit
        // Example: ~32943 becomes -32943, (because everything is reverted even + to - that means MSB)
        // the operators |, &, ^ behave like ||, &&, ^
            // for boolean expressions, but bit by bit
            // Behaviour of the operators |, &, ^ (XOR)
            // operands are the both sides 2 | 3
            // 0 | 0 = 0
            // 1 | 0 = 1
            // 1 | 1 = 1
            // 0 & 0 = 0
            // 1 & 0 = 0
            // 1 & 1 = 1
            // XOR (if both are the same, the result is opposite)
            // 0 ^ 0 = 0
            // 1 ^ 1 = 0
            // 1 ^ 0 = 1
    // Why bitwise operations?
        // 0 | 1 (why put like decimal, but 0 and 1 is also binary)
        // 10 ^ 11 = 01 = 1
        // 4 & 5, return 4, because it takes 4 at translate it to binary and 5 also and then return

/*
    4 & 5
        return 4
    12 & 13
        return 12
    13 & 12
        return 12
    13 & 13
        return 13
    1 & 13
        return 1
    6 & 60
        return 4
*/

// 1 ^ 1 ^ 1 = ?
// 0 ^ 1 = 1
            
// let number = 1 << 4;
// console.log(number.toString(2));
// console.log(number);
// 1 << 4 (16)
// 1 << 2 (2)

// number = 7 >> 1;
// console.log(number.toString(2));
// console.log(number);
// 1 << 4 (16)
// 1 << 2 (2)

// 11101
// &
// 00001
// 00001
// that way we check what is on pos


function firstBitAlg(num, p) {
    let pos = p;
    let bitAtPos1 = (num >> pos) & 1;
    return bitAtPos1;
}

// bitwise operations work on every bit

function bitDestroyer(num, p) {
    let mask = ~(1 << p);
    let newNum = num & mask;

    return newNum;
}

// console.log(bitDestroyer(1313, 5));
// console.log(bitDestroyer(231, 2));
// console.log(bitDestroyer(111, 6));

