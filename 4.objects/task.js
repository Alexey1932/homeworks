function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let alex = new Student('Aleksei', 'male', 31);
let shannon = new Student('Shannon', 'female', 22);
let candy = new Student('Candy', 'female', 19);


Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	if (!(this.excluded)) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function () {
	if (this.marks && this.marks.length > 0) {
		return (this.marks.reduce((a, b) => a + b, 0)) / this.marks.length;
	}
	else {
		return 0
	}
}

Student.prototype.exclude = function (reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}
