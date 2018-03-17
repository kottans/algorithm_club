
function choosePivot(arr, limits) {
if(limits) {
    return Math.floor(
        Math.random() * (limits[1] - limits[0])+ limits[0]
    ) 
} 
return Math.floor(Math.random()*arr.length)
}
function swapElements(arr, a, b) {
    let bufA = arr[a]
    let bufB = arr[b]
    // console.log(`swapping elements [${a}] ${arr[a]} and [${b}] ${arr[b]} `)
    arr[a] = bufB
    arr[b] = bufA
    // console.log('result: of swapping ', arr)
}

function putBefore(arr, a, b) {
    let elementToMove = arr.splice(b, 1)[0]
    arr.splice(a, 0, elementToMove)
}

function partitionAroundPivot(arr, limits, pivotIndex) {
    // console.log(`Arr to be partitioned: `, arr.filter((e, i) => i >= limits[0] && i <= limits[1]), 'around element ', arr[pivotIndex], 'currently on position ', pivotIndex)
    let i, j, n 
    n = limits[1] - limits[0]
    for (j = limits[0]; j <= limits[1]; j++) {
        if((j < pivotIndex) && (arr[j] > arr[pivotIndex])) {
            swapElements(arr, j, pivotIndex)
            pivotIndex = j
        } 
        else if((j > pivotIndex) && (arr[j] < arr[pivotIndex])) {
            putBefore(arr, pivotIndex, j)
            pivotIndex = pivotIndex + 1
    }

}
// console.log(`Partitioned arr: `, arr.filter((e, i) => i >= limits[0] && i <= limits[1]))
// console.log(`Pivot: ${arr[pivotIndex]} at position: ${pivotIndex}`)
return pivotIndex
}

function quickSort(arr, bordersGiven) {
    let limits = bordersGiven || [0, arr.length - 1]
    let n = limits[1] - limits[0]

    let p = choosePivot(arr, limits)
    let correctPivotPosition = partitionAroundPivot(arr, limits, p)
    if(n > 1) {
        let leftPartLimits = [limits[0], --correctPivotPosition]
        let rightPartLimits = [++correctPivotPosition, limits[1]]
        quickSort(arr, leftPartLimits)
        quickSort(arr, rightPartLimits)
    } 
}

module.exports = quickSort
