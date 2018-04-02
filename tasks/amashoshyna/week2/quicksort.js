let m = 0
let strategy = null

const pivotChoiceStrategies = {
	random: (arr, limits) => {
		if(limits) {
			return Math.floor(
				Math.random() * (limits[1] - limits[0])+ limits[0]
			)
		}
		return Math.floor(Math.random()*arr.length)
	},
	alwaysFirst: (arr, limits) => {
		return limits[0]
	},
	alwaysLast: (arr, limits) => {
		return limits[1]
	}
}
function swapByIndex(arr, a, b) {
	let tempA = arr[a]
	let tempB = arr[b]
	arr[a] = tempB
	arr[b] = tempA
}

function partition(arr, boundaries) {
	let initialPivotIndex = pivotChoiceStrategies[strategy](arr, boundaries)
	let [leftBoundary, rightBoundary] = boundaries
	if(initialPivotIndex !== leftBoundary) {
		swapByIndex(arr, leftBoundary, initialPivotIndex)
	}
	let pivotValue = arr[leftBoundary]
	let j = leftBoundary + 1
	let i = leftBoundary + 1
	for (j; j <= rightBoundary; j++) {
		if (arr[j] < pivotValue) {
			swapByIndex(arr, j, i)
			i++
		} 
	}
	let finalPivotIndex = i - 1
	swapByIndex(arr, finalPivotIndex, leftBoundary)
	return finalPivotIndex
}

function quickSort(arr, boundariesGiven) {
	let boundaries = boundariesGiven || [0, arr.length - 1]
	let addedComparisons = (boundaries[1] - boundaries[0])
	m = m + addedComparisons
	let positionedElementIndex = partition(arr, boundaries)
	let n = boundaries[1] - boundaries[0]
	if(n > 1) {
		let leftPartLimits = [boundaries[0], positionedElementIndex - 1]
		let rightPartLimits = [positionedElementIndex + 1, boundaries[1]]
		if (positionedElementIndex - 1 >= 0
            && (leftPartLimits[1] - leftPartLimits[0]) > 0) {
			quickSort(arr, leftPartLimits)
		} 
		if (positionedElementIndex + 1 <= boundaries[1]
            && (rightPartLimits[1] - rightPartLimits[0]) > 0) {
			quickSort(arr, rightPartLimits)
		} 
	} 
	return m
}

function quickSortByStrategy (strategyChosen) {
	if(strategyChosen) {
		strategy = strategyChosen
		return quickSort
	}
	throw new Error('Strategy cannot be null')
}

module.exports = quickSortByStrategy
