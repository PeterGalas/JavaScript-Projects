function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}
//result NaN 0 cant be divided 0
//document.getElementById("Test").innerHTML = isNaN("this is a string");
//results true because a string is not a number
//document.getElementById("Test").innerHTML = isNaN("007");
//results false because 007 is a number
//3 types NaN Infinity (positive) -infinity (neg
//document.write(3E310);
//higher than our maximum floating point number
document.write(-2E310);

//[6>3] AND [22<=23];

document.write(10 > 2);//boolian logic true
document.write(10 < 2);//false

document.write(10 == 10);//equal
//true
document.write(3 == 11);//false
//false
//=== check all 3 areas example date 07/25/1996

X = 10;
Y = 10;
document.write(X===Y);//statement is true

X = 82;
Y = "82";
document.write(X===Y);//false

//3 boolean operators and writen:&& 
//or writen: ||
//not writen: !

document.write(5 > 2 && 10 > 4); //both conditions need to be correct true

document.write(5 > 10 && 10 > 4);//false

document.write(5 > 10 || 10 > 4);//false

document.write(5 > 10 || 10 > 20);//false

function not_Function () {
    document.getElementById("Not").innerHTML = ! (20>10);
}
//false
function not_Function () {
    document.getElementById("Not").innerHTML = ! (5>10);
}
//true




