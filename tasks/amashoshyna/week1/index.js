const mergeSort = require('./mergesort')
const dataArray = require('fs')
    .readFileSync(__dirname + '/data.txt')
    .toString()
    .split('\n')
    .map(item => Number(item))

const countInversions = require('./countInversions')
let result = countInversions(dataArray)
console.log('Result: ', result, ' inversions')

// Check if solution is correct

const checkResult = (data, result) => {
    data.reverse()
    let resultReversed = countInversions(data)
    let expectedResult = (data.length * (data.length - 1)/2 - resultReversed)
    return result === expectedResult
        ? 'result OK'
        : `result incorrect by ${result - expectedResult}`
}
console.log(checkResult(dataArray, result))
