"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant === 0) {
		let discriminantSquare = -b / (2 * a);
		arr.push(discriminantSquare);
	}
	else if (discriminant > 0) {
		let discriminantSquare1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let discriminantSquare2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(discriminantSquare1, discriminantSquare2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false
	}
	let monthPercent = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)))
	let payment = monthPayment * countMonths;
	if (payment != 0) {
		payment = parseFloat(payment.toFixed(2))
	}
	return payment;
}