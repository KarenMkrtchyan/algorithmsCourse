function numLength(num) {
	return num.toString().length
}
function subNum(num, start, end) {
	return parseInt(num.toString().substring(start, end))
}

function multiply(x, y) {
	const x_length = numLength(x)
	const y_length = numLength(y)

	if (x_length === 1 || y_length === 1) {
		return x * y
	}

	const x_h = subNum(x, 0, x_length / 2)
	const x_l = subNum(x, x_length / 2, x_length)
	const y_h = subNum(y, 0, y_length / 2)
	const y_l = subNum(y, y_length / 2, y_length)

	let step1 = multiply(x_h, y_h)
	let step2 = multiply(x_l, y_l)
	let step3 = multiply(x_h + x_l, y_h + y_l)
	let step4 = step3 - step2 - step1

	step1 *= 10 ** x_length
	step4 *= 10 ** (x_length / 2)

	console.log(`step1 ${step1}`)
	console.log(`step2 ${step2}`)
	console.log(`step3 ${step3}`)
	console.log(`step4 ${step4}`)

	const result = step1 + step2 + step4
	console.log(`Multiplying ${x} and ${y} equals ${result}`)
	return result
}

const miracle = multiply(1234, 5643)
console.log(`Answer is ${miracle}`)
