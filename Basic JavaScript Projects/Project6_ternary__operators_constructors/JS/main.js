function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are to short":"you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Bmw", "X5", "2020", "white");
var Emily = new Vehicle("Dodge", "Viper", "2020", "red");
var Erik = new Vehicle("Jeep", "Trail Hawk", "2019", "blue");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-color " + Erik.Vehicle_Model +
    " manufacture in " + Erik.Vehicle_Year;
    
}

function Person(First, Last, Age, Weight) {
    this.Person_First_Name = First;
    this.Person_Last_Name = Last;
    this.Person_Age = Age;
    this.Person_Weight = Weight;
}
var Peter = new Person("", "Galas", "30", "150lbs");
var Ivan = new Person("Ivan", "Galas", "28", "190lbs");
var David = new Person("", "Galas", "18", "140");
function myFunction() {
    document.getElementById("Person").innerHTML =
    "David is a software engineer " + David.Person_First_Name + "last name is " + David.Person_Last_Name + " age is " + David.Person_Age +
    " weighing in at " + David.Person_Weight;
}

// idenifiers
var X = 10;
var Y = "Peter";
//output code adds 1 to 9 innested - Plus_one() nested programs
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}