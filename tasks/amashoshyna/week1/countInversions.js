let count = 0

const merge = (arrA, arrB) => {

    let mergeResult = Array(arrA.length + arrB.length)

    let i = j = k = 0
    for (k; k < mergeResult.length; k++) {
        if(arrA[i] > arrB[j]) {
            count = count + (arrA.length - i)
        }

        if (arrA[i]< arrB[j] || !arrB[j]) {
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

const countInversions = (arr) => {
    if(isSortable(arr)) {
        let breakPoint = Math.round(arr.length/2)
        let splitA = arr.slice(0, breakPoint)
        let splitB = arr.slice(breakPoint)

        let sortedSplitA = countInversions(splitA)
        let sortedSplitB = countInversions(splitB)

        return merge(sortedSplitA, sortedSplitB)
    }
    
    return arr
}

const getInversionsCount = (arr) => {
    count = 0
    countInversions(arr)
    return count
}
module.exports = getInversionsCount
