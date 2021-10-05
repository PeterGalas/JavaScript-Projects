// count to 10 var 
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// Instrument printing each item
var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "in this picture, the cat is " +
    Cat_Picture[0] + "."; //giving you any choice of cat picture []
}

//block scope
//function myFunction() { 
    //var carName = "E30";
    //document.getElementById("Example").innerHTML = carName;
//}

function constant_function(){
    const Musical_Instrument = {type:"guitar",brand:"Fender",color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//outputs 82, 33, 82
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


//var X = 82;
//document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
//string
function funky() {
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}