
function choosePivot(arr, limits) {
	if(limits) {
		return Math.floor(
			Math.random() * (limits[1] - limits[0])+ limits[0]
		) 
	} 
	return Math.floor(Math.random()*arr.length)
}
function swapByIndex(arr, a, b) {
	let tempA = arr[a]
	let tempB = arr[b]
	arr[a] = tempB
	arr[b] = tempA
}

function partition(arr, boundaries) {
    let initialPivotIndex = choosePivot(arr, boundaries)
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
	let positionedElementIndex = partition(arr, boundaries)
	let n = boundaries[1] - boundaries[0]
	if(n > 1) {
		let leftPartLimits = [boundaries[0], positionedElementIndex - 1]
		let rightPartLimits = [positionedElementIndex + 1, boundaries[1]]
		if (positionedElementIndex - 1 >= 0
            && (leftPartLimits[1] - leftPartLimits[0]) > 0) quickSort(arr, leftPartLimits)
        if (positionedElementIndex + 1 <= boundaries[1]
            && (rightPartLimits[1] - rightPartLimits[0]) > 0) quickSort(arr, rightPartLimits)
	} 
}

module.exports = quickSort
