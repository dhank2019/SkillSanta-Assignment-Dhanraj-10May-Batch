let string1 = prompt("Type your string");
vowel(string1);

function vowel(string1) {
    console.log(string1);
    let count = 0;
    let string2 = "aeiou";
    let string3 = "AEIOU"
    let length = string1.length;
    console.log(length);

    for (let i = 0; i < 5; i++) {
        let x = document.getElementById('check').innerHTML;
        count = 0;
        for (let j = 0; j < length; j++) {
            if (string1[j] == string2[i] || string1[j] == string3[i]) {
                count++;
            }

        }
        console.log(string2[i] + " appears " + count + " no. of times ");
        document.getElementById('check').innerHTML = x + "<br>" + string2[i] + " appears " + count + " no. of times ";
    }
    return 0;
}