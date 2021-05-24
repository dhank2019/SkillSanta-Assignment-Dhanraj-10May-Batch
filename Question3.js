let choice = prompt("Enter Your Choice - 0 to convert from Celsius to Fahrenheit  1 to convert from Fahreinheit to Celsius")
Convert(choice);

function Convert(choice) {
    if (choice == 0) {
        let temp = prompt("Enter temperature in Celsius");
        let converted = ((temp * 9) / 5) + 32;
        console.log("The Temperature in Fahrenheit is" + converted);
        document.write("The Temperature in Fahrenheit is" + converted);
    } else if (choice == 1) {
        let temp = prompt("Enter temperature in Fahrenheit");
        let converted = ((temp - 32) * 5) / 9;
        console.log("The Temperature in Degree is" + converted);
        document.write("The Temperature in Degree is" + converted);
    } else {
        console.log("Sorry You have Entered a wrong Choice");
        document.write("Sorry You have Entered a wrong Choice");
    }
}