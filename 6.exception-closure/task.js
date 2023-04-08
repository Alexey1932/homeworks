function parseCount(value) {
	const number = parseFloat(value, 10);
	if (isNaN(number)) {
		throw new Error("Невалидное значение");
	}
	return number;

}

function validateCount(value) {
	try {
		return (number = parseCount(value));
	} catch (error) {
		console.log(error);
		return error;
	}
}


class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = this.perimeter / 2;
		let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return (new Triangle(a, b, c));
	} catch (error) {
		let error2 = 'Ошибка! Треугольник не существует';
		console.log(error2);
		return {
			get perimeter() { return error2 },
			get area() { return error2 }
		};
	}
}
