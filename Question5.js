//Creating the program without using the inbuilt functions of string
let string1 = prompt("Enter the string");
let newstring = "";
let length = string1.length;

for (let i = 0; i < length; i++) {
    newstring += string1[length - 1 - i];

}
console.log(document);
document.getElementById('check1').innerHTML = "The reversed string is<h2> " + newstring + "</h2>";
var x = newstring.localeCompare(string1);

if (x == 0) {
    document.getElementById('check1').innerHTML = document.getElementById('check1').innerHTML + "<br>The input string is a palindrome";
} else {
    document.getElementById('check1').innerHTML = document.getElementById('check1').innerHTML + "<br>The input string is not a palindrome";
}