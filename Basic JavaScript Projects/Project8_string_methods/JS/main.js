function countdown() {
    var seconds = document.getElementById("seconds").value;
  
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
  }
  

function full_Sentence() {//concatentating strings
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {//gives a pice of data
    var Sentence = "All work and no play makes Jonny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {//returns your variable
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function percision_Method() {//formats a number to a specified legth
    var X = 12938.3012987376112;
    document.getElementById("Percision").innerHTML = X.toPrecision(10);
}