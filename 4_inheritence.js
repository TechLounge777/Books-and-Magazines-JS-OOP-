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


//    The call() allows for a function/method belonging to one object
//    to be assigned and called for a different object.

//	  call() provides a new value of this to the function/method. With
//	  call, you can write a method once and then inherit it in another
//	  object, without having to rewrite the method for the new object.	


// Magazine Constructor
function Magazine(title, author, year, month) {
	Book.call(this /* this is the "Magazine" itself :)*/ , title, author, year);

	this.month = month;
}

// Inherit Prototype 
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag1', 'John Doe', '2018', 'Jan'); 






