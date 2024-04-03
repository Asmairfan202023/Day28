"use strict";
// Question84: Replacing text in a string: Write a function that takes a sentence and replace all instances of the word "JavaScript" with "typescript"
function textreplaceString(sent) {
    return sent.replace(/JavaSCript/g, "Typescript");
}
console.log(textreplaceString("I like JavaSCript and JavaSCript is awesome"));
