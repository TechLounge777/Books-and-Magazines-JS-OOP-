class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge() {
		const years = new.Date().getFullYear - this.year;
	return `${this.title} is ${years} years old`;
	} 
}


// Magazine Subclass
class Magazine extends Book {
	constructor(totle, author,year, month) {
		super(title, author, year);
		this.month = month;
	}
}


// Instantiatr Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jann'); 

const.log(mag1.getSummary());





