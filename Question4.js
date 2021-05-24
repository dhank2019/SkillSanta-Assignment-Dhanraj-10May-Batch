let number = prompt("Enter the number");
if ((number >= 50) && (number <= 100)) {
    document.getElementById('check1').innerHTML = "<br>Congratulations the number" + " " + number + " lies within range of 50-100"
} else {
    document.getElementById('check1').innerHTML = "Sorry the number   " + number + "  does not lie within the range of 50-100"
}