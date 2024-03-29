// Constructor
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}


//getSummary - prototype method (we don't want getSummary for every book, that's why we store it in the prototype)
Book.prototype.getSummary = function(){
		return `${this.title} was written by ${this.author} in ${this.year}`;
};

//getAge 
Book.prototype.getAge = function() {
	const years = new.Date().getFullYear - this.year;
	return `${this.title} is ${years} years old`;
};

//Revise / Change Year
Book.prototype.revise = function(newYear) {
	this.year = newYear;
	this.revised = true;
};


// Instantiate an Object

const book1 = new Book('Book One','Joe Doe', '2013');
const book2 = new Book('Book Two','Jnee Doe', '2016');

console.log(book2.getSummary());

