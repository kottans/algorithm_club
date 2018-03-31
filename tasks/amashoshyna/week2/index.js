const quickSort = require('./quicksort')
const fs = require('fs')
const data = fs.readFileSync('./QuickSort.txt', 'utf8').split('\r\n').map(num => +num)
quickSort('alwaysFirst')(data)
let result = data.every((val, index) => {
    if(index > 0) {
        return (val - data[index-1]) >0
    }
    return true
})

console.log('Result is correct: ', result)