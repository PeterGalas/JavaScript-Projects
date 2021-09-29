
function My_First_Function() { //difining a function and naming it
    var str = "This text is green!"; //defining a variable and giving it a string value
    var result = str.fontcolor("green"); //using the fontcolor method on str variables
    document.getElementById("Green_Text").innerHtml = result; //putting the value // of result into HTML element with "Green_text" id
}



function myFunction() {
    var sentence = "I am Learning";
    sentence += " a lot from this JavaScript course!";
    document.getElementById("Concatencate").innerHTML = sentence;
}

