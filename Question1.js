let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let num3 = Number(prompt("Enter the third number"));
let large;
if ((num1 >= num2) && (num1 >= num3)) {
    large = num1;
} else if ((num2 >= num1) && (num2 >= num3)) {
    large = num2;
} else {
    large = num3;
}
console.log("The largest number is " + large);
document.getElementById("largest").innerHTML = "The largest number of the numbers entered is  " + large;