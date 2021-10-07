function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
            case "Yellow":
                Color_Output = "Yellow" + Color_String;
                break;
                case "Green":
                    Color_Output = "Green" + Color_String;
                    break;
                    case "Blue":
                        Color_Output = "Blue" + Color_String;
                        break;
                        case "Pink":
                            Color_Output = "Pink" + Color_String;
                            break;
                            case "Purple":
                                Color_Output = "Purple" + Color_String;
                                break;
                                default:
                                    Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}



//choice between variable A or O first element class click once button is clicked
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed, see now there is more text!";
}

//function gives a radiaint grade shade for our rectangle
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//create gradient 
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
//fill gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

var c = document.getElementById("myCanvaz");
var ctx = c.getContext("2d");

var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "blue");
my_gradient.addColorStop(1, "white");

ctx.fillStyle = my_gradient;
ctx.fillRect(20,20,150,100);


