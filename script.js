// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).
// factorial(1) → 1
// factorial(2) → 2
// factorial(3) → 6
var factorial = (x) => {
    if (x == 1) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }

}

// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
// fibonacci(0) → 0
// fibonacci(1) → 1
// fibonacci(2) → 1
var fibonacci = (x) => {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}

// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
// bunnyEars(0) → 0
// bunnyEars(1) → 2
// bunnyEars(2) → 4
var bunnyEar = (x) => {
    if (x == 0) {
        return 0;
    } else {
        return 2 + bunnyEar(x - 1);
    }
}

//We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
// bunnyEars2(0) → 0
// bunnyEars2(1) → 2
// bunnyEars2(2) → 5
var bunnyEar2 = (x) => {
    if (x === 0) {
        return 0;
    }
    if (x % 2 === 0) {
        return 3 + bunnyEar2(x - 1);
    }
    if (x % 2 !== 0) {
        return 2 + bunnyEar2(x - 1);
    }
}

//We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.
// triangle(0) → 0
// triangle(1) → 1
// triangle(2) → 3
var triangle = (x) => {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    return x + triangle(x - 1);
}

// Given a non-negative int n, return the sum of its digits recursively (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3
var sumDigits = (x) => {
    var right = x % 10;
    var leftover = Math.floor(x / 10);
    if (leftover == 0) {
        return x;
    } else {
        return right + sumDigits(leftover);
    }
}


// Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops). Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
// count7(717) → 2
// count7(7) → 1
// count7(123) → 0
var count7 = (x) => {
    var right = (x % 10) === 7 ? 1 : 0;
    var leftover = Math.floor(x / 10);
    if (leftover == 0) {
        return x === 7 ? 1 : 0;
    } else {
        return right + count7(leftover);
    }
}


// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
// powerN(3, 1) → 3
// powerN(3, 2) → 9
// powerN(3, 3) → 27
var powerN = (base, power) => {
    if (power === 1) {
        return base;
    } else {
        return base * powerN(base, power - 1);
    }
}


// Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.
// countX("xxhixx") → 4
// countX("xhixhix") → 3
// countX("hi") → 0
var countX = (input) => {
    var isX = input[0] === 'x' ? 1 : 0;
    return input.length === 1 ? isX : isX + countX(input.substring(1));
}


// Given a string, compute recursively (no loops) the number of times lowercase "hi" appears in the string.
// countHi("xxhixx") → 1
// countHi("xhixhix") → 2
// countHi("hi") → 1
var countHi = (input) => {
    if (input.length <= 1) {
        return 0;
    }
    var isHi = input[0] === 'h' && input[1] === 'i' ? true : false;
    if (isHi) {
        return 1 + countHi(input.substring(2));
    }
    return 0 + countHi(input.substring(1));
}

// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.
// changeXY("codex") → "codey"
// changeXY("xxhixx") → "yyhiyy"
// changeXY("xhixhix") → "yhiyhiy"
var changeXY = (input) => {
    var isX = input[0] === 'x' ? 'y' : input[0];
    return input.length === 1 ? isX : isX + changeXY(input.substring(1));
}

// Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".
// changePi("xpix") → "x3.14x"
// changePi("pipi") → "3.143.14"
// changePi("pip") → "3.14p"
var changePi = (input) => {
    if (input.length == 1) {
        return input[0];
    }
    if (input.length <= 0) {
        return '';
    }
    var isPi = input[0] === 'p' && input[1] === 'i' ? true : false;
    if (isPi) {
        return '3.14' + changePi(input.substring(2));
    }
    return input[0] + changePi(input.substring(1));
}

// Given a string, compute recursively a new string where all the 'x' chars have been removed.
// noX("xaxb") → "ab"
// noX("abc") → "abc"
// noX("xx") → "
var noX = (input) => {
    var isX = input[0] === 'x' ? '' : input[0];
    return input.length === 1 ? isX : isX + noX(input.substring(1));
}

// Given an array of ints, compute recursively if the array contains a 6. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.
// array6([1, 6, 4], 0) → true
// array6([1, 4], 0) → false
// array6([6], 0) → true

var array6 = (arr, index) => {
    if (index > 0) {
        arr.slice(index);
    }
    var isSix = arr[0] === 6 ? true : false
    if (arr.length === 1) {
        return isSix;
    } else {
        arr.shift();
        return isSix ? true : array6(arr, 0);
    }
}

(() => {
    'use strict';
    console.log(array6([1,2,3,4,5], 0));
})();