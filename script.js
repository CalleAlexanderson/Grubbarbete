"use strict";

let arr = [1,1];

while (arr.length < 12) {
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
    console.log(arr);
}

//°F = °C * 1.8 + 32

console.log(convertToF(28));

function convertToF(temp) {
    return (temp * 1.8 + 32);
}
