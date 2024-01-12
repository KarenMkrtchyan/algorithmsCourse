const sort = require('./mergeSort')

test('does nothing to an already sorted list', () => {
	const list = [0, 1, 2, 3, 4, 5]
	expect(sort(list)).toEqual(list)
})
test('correctly sorts a list', () => {
	const list = [9, 7, 5, 3, 6, 1]
	const sortedList = [1, 3, 5, 6, 7, 9]
	expect(sort(list)).toEqual(sortedList)
})
