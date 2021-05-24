let str = prompt("Enter String");
strip_tags(str);

function strip_tags() {
    var result = str.replace(/(<([^>]+)>)/g, '');
    /*var result = str.replace(/</g, " ");
    var result = result.replace(/>/g, " ");
    var result = result.replace(/\//g, " ");*/
    console.log("The corrected String without html/xml tags  Is ")
    console.log(result);
    document.getElementById("check").innerHTML = result;
}