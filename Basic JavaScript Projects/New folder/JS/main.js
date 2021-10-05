// counting 1 to 10
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

let str ="Hello World";
document.getElementById("demo").innerHTML = str.length;;
str.length // retuns 12