var x = document.getElementById("check").innerText;
console.log(x);
for (let i = 20; i <= 30; i++) {
    let check = i % 2;
    if (check == 0) {
        x += i + " is an even number\n"
        console.log(i + " is an even number\n")
    } else {
        x += i + " is odd number\n"
        console.log(i + " is an odd number\n")
    }
    document.getElementById("check").innerText = x;
}