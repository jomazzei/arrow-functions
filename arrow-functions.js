/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function add2Num(a, b) {
    return a + b;
}
let sum = add2Num(3, 5);
console.log(sum);
// Arrow Function With Parameters
const add2NumArrow = (a, b) => {return a + b}
let sum2 = add2NumArrow(5, 5);
console.log(sum2);
// Single Line Arrow Function With Parameters
const add2NumArrowSimple = (a, b) => a + b;
let sum3 = add2NumArrowSimple(6, 6);
console.log(sum3);
// Implicit Returns
const sayMessage = message => console.log(message);
sayMessage("Hello");

const sayHi = () => console.log("Hi");
sayHi();
// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiple line string
    </p>`
)
console.log(returnMultipleLines());