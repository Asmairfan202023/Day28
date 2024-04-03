"use strict";
// Question83: Converting to upper and lower case: create a function that takes a string, convert it to uppercase, then to lower case, and logs both.
function upperAndLowerCase(str1) {
    let upperstr1 = str1.toUpperCase();
    let lowerstr1 = str1.toLocaleLowerCase();
    console.log("Uppercase:", upperstr1, "LowerCAse:", lowerstr1);
}
upperAndLowerCase("asmairfan");
