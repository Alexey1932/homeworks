function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let avg = Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
	return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	else {
		return arr.reduce((a, b) => a + b);
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	else {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		return max - min
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	else {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for (let i of arr) {
			if (i % 2 === 0) {
				sumEvenElement += i;
			}
			else {
				sumOddElement += i;
			}
		}
		return sumEvenElement - sumOddElement
	}
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	else {
		let sumEvenElement = [0, 0];
		for (let i of arr) {
			if (i % 2 === 0) {
				sumEvenElement[0] += i;
				sumEvenElement[1] += 1;
			}
		}
		return sumEvenElement[0] / sumEvenElement[1]
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i of arrOfArr) {
		let res = func(...i);
		res > maxWorkerResult ? maxWorkerResult = res : maxWorkerResult
	}
	return maxWorkerResult
}
