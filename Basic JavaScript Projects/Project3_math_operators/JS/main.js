function addition_Function() {
    var Addition = 5 + 2;
    document.getElementById("Addition").innerHTML = "5 + 2 = " + Addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() {
    var Multiply = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + Multiply;
}

function division() {
    var Divide = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + Divide;
}

function more_Math() {
    var long_Math = (1+2) * 10 / 2-5;
    document.getElementById("long_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + long_Math; 
}

function modulus_Operator() {
    var Modulus = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Modulus;
}

function negation_Operator() {
    var Z = 10;
    document.getElementById("Z").innerHTML = -Z;
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