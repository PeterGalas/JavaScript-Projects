function myFunction() { //calling function
    var sentence = "I am learning"; //concatentating the two sentences by adding +=
    sentence += " a lot, from this book!";
    document.getElementById("Concatencate") .innerHTML = sentence; //getting element by id
}

function myFunction(p1, p2) {
    return p1 * p2;
    }
document.getElementbyId("demo").innerHTML = myFunction(4, 3);

