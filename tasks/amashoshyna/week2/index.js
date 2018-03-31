const quickSort = require('./quicksort')
const fs = require('fs')
const data = fs.readFileSync('./QuickSort.txt', 'utf8')
    .trim()
    .split('\r\n')
    .map(num => +num)

let availableStrategies = [
    'alwaysFirst',
    'alwaysLast',
    'random'
]
// TODO: choose strategy from array "availableStrategies"
let strategy = availableStrategies[0]
let numberOfComparisons = quickSort(strategy)(data)

console.log(`Number of comparisons for strategy "${strategy}": ${numberOfComparisons}`)

function checkResult(data) {
    return data.every((val, index) => {
        if(index > 0) {
            return (val - data[index-1]) > 0
        }
        return true
    })
}

console.log('Result is correct: ', checkResult(data))
