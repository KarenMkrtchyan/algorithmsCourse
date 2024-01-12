function sort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	const [left, right] = split(arr)
	// console.log('left, ', left)
	// console.log('right, ', right)
	sort(left)
	sort(right)
	const merged = merge(left, right)
	//console.log(merged)
	return merged
}
function split(arr) {
	const left = arr.slice(0, arr.length / 2)
	const right = arr.slice(arr.length / 2)
	return [left, right]
}

function merge(left, right) {
	let newArr = []
	let l = 0
	let r = 0
	while (newArr.length < 2 * left.length) {
		if (left[l] === undefined || left[l] > right[r]) {
			newArr.push(right[r])
			r += 1
		} else {
			newArr.push(left[l])
			l += 1
		}
	}
	return newArr
}

sort([6, 2, 3, 7, 0, 1])

//module.exports = sort;
