function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed: "French Bulldog",
        Age:"2",
        Sound:"Bark!"
    };
    delete Animal.Sound; //takes away with a delete variable(Sound=Bark) gives a undifined!
    document.getElementById("Dictionary").innerHTML = Animal.Breed + Animal.Sound; //key value pairs after your variable.any variable you choose for an output.
}

