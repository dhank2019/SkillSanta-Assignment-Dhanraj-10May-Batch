let date1 = prompt("Enter date of birth in format dd/mm/year");
dob(date1);

function dob(date) {
    again: {

        var pos = date.lastIndexOf("/");
        var pos1 = date.indexOf("/");
        console.log(pos1);
        var month = Number(date.slice(pos1 + 1, pos1 + 3));
        console.log(month);
        var day = Number(date.slice(pos1 - 2, pos1));
        if (month < 1 || month > 12) {
            console.log("Wrong Month Entered.Try again")
            break again;
        } else if (day < 1 || day > 31) {
            console.log("Wrong Day Entered.Try again")
            break again;
        } else if (year > 2021) {
            console.log("Wrong Year.Try again")
            break again;
        } else {
            var pos = date.lastIndexOf("/");
            var year = Number(date.slice(pos + 1, (date.length + 1)));
            console.log(year);
            if (((2021 - year) >= 18) && ((2021 - year) <= 44)) {
                console.log("You are eligible for registration");
                location.assign("https://selfregistration.cowin.gov.in");
            } else {
                console.log("You are not within 18 to 44 years of age")
            }
        }
    }
    /*let month = prompt("Enter month of birth");
    let year = prompt("Enter year of birth");
    console.log("The date of birth is " + date + "\/" + month + "\/" + year);
*/
}