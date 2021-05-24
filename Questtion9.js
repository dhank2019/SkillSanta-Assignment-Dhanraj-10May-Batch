var arr1 = prompt("Enter your numbers seperated by comma").split(",")
console.log(("array 1= " + arr1));
var arr2 = prompt("Enter your numbers for another array seperated by comma ").split(",");
console.log(("array 1= " + arr2));
difference(arr1, arr2);

function difference(arr1, arr2) {
    var obj = [];
    var length1 = arr1.length;
    var length2 = arr2.length;
    var count = 0;
    for (let i = 0; i < length1; i++) {
        if (obj.includes(arr1[i]) == 0) {
            obj[count] = arr1[i];
            count++;
        }
    }
    for (let i = 0; i < length2; i++) {
        if (obj.includes(arr2[i]) == 0) {
            obj[count] = arr2[i];
            count++;
        }
    }
    console.log("The unique elements of two arrays are  " + obj);
    var convert = obj.toString();
    document.getElementById("join").innerHTML = "The unique elements of two arrays are  " + obj;
    console.log(obj);
    return 0;
}