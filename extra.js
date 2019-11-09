function person (name, favColour) {
	console.log("Hello, my name is " + name + "and my favourite colour is " + favColour + ".");
}


var janeName = "Jane Doe";
var janefavColour = "red";

// person("Jane Doe", "red");
person(janeName, janefavColour);

person("John Smith", "green");

// Let's create an Object for "John"

var john = {
	name: "John Smith",
	favouriteColour: "green"

	greet: function() {
		console.log("Hello, my name is " + john.name + "and my favourite colour is " + john.favouriteColour + ".");
	}
}

john.greet();

person(john.name, john.favouriteColour);

