//also short
//myFunction = () => "this is my function";
//myFunction = function() {
    //return "This is my function";
//}

//var car;
//car = (val) =>"these are my favorite car brands: " + val;
//document.getElementById("displayCar").innerHTML = car("Bmw, Audi, Benz");

//using the arrow func to pass in a parameter of age
//var ages = [2, 10, 18, 20, 13, 15, 30];

//checkAge = (age) => age >= 18;

//function myFunction() {
    //use .some() to iterate through the array of ages displays results
    //document.getElementById("DisplayAge").innerHTML = ages.some(checkAge);
//}

//this func keeps track of whose turn it is
let activePlayer = "X";
//this array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];

//this function is for placeing a x or an o in sqaures
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is
        if (activePlayer === 'X') {
            // if activePlayer is equal to 'X' the x.png is placed in html
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be "x" or "O" so if not X it must be O
        } else {
            //if activeplayer is equal to "O" the o.png is placed in html
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber an activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for any win condtions
        checkWinConditions();
        //this condtion is for changing the active player.
        if (activePlayer === 'X') {
            //if active player is "X" change it to "O"
            activePlayer = 'O';
            //if active player is anythin other than "X"
        } else {
            //changes the active player to "X"
            activePlayer = 'X';
        }

//this function plays placement sound
audio('./media/place.mp3');
//checks condition to see if it is computers turn
if(activePlayer === 'O'){
    //this function checks to see if it is computers choice
    disableClick();
    //this function waits 1 sec before computer places img and enables click.
    setTimeout(function (){ computersTurn(); }, 1000) 
    }
    //returns true is needed for our computerTurn () function to work
    return true;
}
//this function results in a radom square being selected
function computersTurn() {
    //this boolean is needed for our while loop.
    let success = false;
    //this variable stores a random number 0-8 selected
    let pickASquare;
    //this condition allows our while loop to keep trying if a square is selected already
    while(!success){
        //a random number 0 to 8 is selceted
        pickASquare = String(Math.floor(Math.random() * 9));
        //if the random number evluated retured true, the square hasnt been selected yet
        if(placeXOrO(pickASquare)) {
            //this line calls the function
            placeXOrO(pickASquare);
            //this change our boolean and ends the loop
            success = true;
        };
    }
  } 
}
//this function parses the selectedSquares array to search for win condtions
//drawWinLine function is called a draw line if conditions is met
function checkWinConditions() {
    // x 0, 1, 2 condtions
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // x 3, 4, 5 conditions
    else if(arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // x 6, 7, 8 condition
    else if(arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // x 0, 3, 6 condition
    else if(arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // x 1, 4, 7 condition
    else if(arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // x 2, 5, 8 condition
    else if(arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // x 6, 4, 2 condition
    else if(arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // x 6, 4, 2 condition
    else if(arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // x 0, 4, 0 condition
    else if(arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // o 0, 1, 2 condition
    else if(arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // o 3, 4, 5 condition
    else if(arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // o 6, 7, 8 condition
    else if(arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // o 0, 3, 6 condition
    else if(arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // o 1, 4, 7 condition
    else if(arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // o 2, 3, 8 condition
    else if(arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // o 6, 4, 2 condition
    else if(arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // o 0, 4, 8 condition

    //this condition checks for ties, if none of the above conditions register and 9
    //squares are selected the code excutes
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the retsetGame is called
    setTimeout(function () { resetGame(); }, 1000);
}

//this function checks if an array includes 3 strings. it is used to check for
//each win condtions
function arrayIncludes(squareA, squareB, squareC) {
    //these 3 variables will be used to check for 3 in a row
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)

    //if the 3 variables we pass are all included in our array true is
    //resutls and our else condition executes the drawwinLine function
    if (a === true && b === true && c === true) { return true }
    }
}

    //this function makes our body element temporily unclicked
    function disableClick() {
        //this makes our body unclicked
        body.style.pointerEvents = 'none';
        //this makes our body clickable again after 1 second
        setTimeout(function() {body.style.pointerEvents = 'auto' ;}, 1000);
    }

    //this function takes a string parament of the path you set earlier for
    //placement sound (./media/place.mp3)
    function audio(audioURL) {
        //we create a new audio object and we pass the path as a parameter
        let audio = new Audio(audioURL);
        //play method plays our audio sound
        audio.play();
    }

    //this function utilize html canvas to draw win lines
    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        //this line access our html canvas element
        const canvas = document.getElementById("win-lines") 
        //this line gives us access to methods and properties to use on canvas
        const c = canvas.getContext('2d');
        //this line indicateds where the start of a line x axis is
        let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    

    function animateLineDrawing() {
        const animationloop = requestAnimationFrame(animateLineDrawing);

        
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationloop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationloop); }
        }
    }

    function clear() {
        const animationloop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationloop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
    }

    //this func resets the game in the event of a tie or win
    function resetGame() {
        //this for loop iterates though each html square element
        for (let i = 0; i < 9; i++) {
            //this variable gets the html element of i
            let square = document.getElementById(String(i))
            //thiis removes our elements backgroundImage
            square.style.backgroundImage = ''
        }
        //this resets our array so it is empty and we can start over
        selectedSquares = [];
    }