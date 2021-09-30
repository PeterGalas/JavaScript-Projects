function addition_Function() {
    var Addition = 5 + 2;
    document.getElementById("Addition").innerHTML = "5 - 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; 
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
//adds 1 digit
var X = 5;
X++;
document.write(X);
//takes 1 digit away
var X = 5.25;
X--;
document.write(X);

//number 0-1
window.alert(Math.random());
//number between 0-100
window.alert(Math.random() * 100);