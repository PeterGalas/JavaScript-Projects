window.alert("Hello welcome")
var A = "This is a String!";
document.write(A);
var B = "quote";
document.write("Lisa told Bart, \"Knock it off, Bart! or i'll tell dad!\"<br>\"Eat me shorts!\"Bart responded.");
var C = "quoteTwo";
document.write("\"Be who you are and say what you feel," + "because those mind don\'t matter and those matter don\'t mind.\""+"-Dr. Seuss");

var D = "B" + "C";
document.write(D);

var Family = "The Arezzinins", Dad = "Jeremiah", Mom = "Jan", Daughter = "Penny", Son = "Peter";
document.write(Mom);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue")
document.write(blues);

document.write("My name is Peter");

function My_First_Fucntion() { //difining a function and naming it
    var str = "This text is green!"; //defining a variable and giving it a string value
    var result = str.fontcolor("green"); //using the fontcolor method on str variables
    document.getElementById("Green_Text") .innerHtml = result; //putting the value // of result into HTML element with "Green_text" id
}



function myFunction() {
    var sentence = "I am Learning";
    sentence += " a lot from this JavaScript course!";
    document.getElementById("Concatencate").innerHTML = sentence;
}

