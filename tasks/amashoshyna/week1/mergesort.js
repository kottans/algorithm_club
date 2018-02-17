const merge = (arrA, arrB) => {
    let mergeResult = Array(arrA.length + arrB.length)

    let i = j = k = 0
    for (k; k < mergeResult.length; k++) {
        if (arrA[i] && arrA[i]< arrB[j]  || !arrB[j]) {
            mergeResult[k] = arrA[i]
            i++
        } else {
            mergeResult[k] = arrB[j]
            j++
        }
    }

    return mergeResult
}

const isSortable = (arr) => arr.length > 1

const mergeSort = (arr) => {
    if(isSortable(arr)) {
        let breakPoint = Math.round(arr.length/2)
        let splitA = arr.slice(0, breakPoint)
        let splitB = arr.slice(breakPoint)

        let sortedSplitA = mergeSort(splitA)
        let sortedSplitB = mergeSort(splitB)

        return merge(sortedSplitA, sortedSplitB)
    }
    
    return arr
}

module.exports = mergeSort
