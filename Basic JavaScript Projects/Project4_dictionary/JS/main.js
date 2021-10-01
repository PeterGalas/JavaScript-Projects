function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black with White",
        Breed:"French Bulldog",
        Age:"2",
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Breed + Animal.Sound;
}


