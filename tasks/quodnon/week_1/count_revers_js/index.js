'use strict'

const fs = require('fs');

const {StringDecoder}= require('string_decoder');
const decoder = new StringDecoder("utf8");

fs.readFile('tasks\\quodnon\\week_1\\count_revers_js\\task.txt',readFileAndSort);

function readFileAndSort(error, data)
{
    let fileContent = decoder.write(data);
    let initArr= fileContent.split('\r\n').map(x=>{ return Number.parseInt(x)});
    let s= sortAndCount({array:initArr, counter:0})
    //let s = sortAndCount({array:[1,3,5,2,4,6], counter:0});
    // let ss= mergeAndCount({array:[1,3,5], counter:0},{array:[2,4,6], counter:0})
    //c#- 2407905288 js 2407905288
console.log(s.counter)
}

function sortAndCount (arrayObj)
{
    let {array,counter} = arrayObj;

    let counterOfReverses = 0;

    if (array.length==1)
    {
        return {
            array:array,
            counter :0
        };
    }
    let indexToSplit = Math.floor(array.length/2)
    let left_array = array.slice(0,indexToSplit);
    let right_array = array.slice(indexToSplit, array.length);
    let counter_left = 0;
    let counter_right =0;

    let sortedLeft = sortAndCount({array:left_array,counter:counter_left});
    let sortedRight = sortAndCount({array: right_array,counter:counter_right});
    let mergedArray = mergeAndCount(sortedLeft,sortedRight);

    counterOfReverses = sortedLeft.counter+ sortedRight.counter +mergedArray.counter;
    return {
        array :mergedArray.array,
        counter :counterOfReverses
    }
}

function mergeAndCount( leftArrayObj, rightArrayObj) {
    let mergedArray = [];
    let i=0,j=0, rc=0;
    let arrayLeft = leftArrayObj.array;
    let arrayRight = rightArrayObj.array;
    while (i<=arrayLeft.length && j<=arrayRight.length)
    {
         if(arrayLeft.length == i){
            arrayRight.slice(j).map(x=>mergedArray.push(x));
            break;
         }
        
         if(arrayRight.length == j){
            arrayLeft.slice(i).map(x=>mergedArray.push(x));
             break;
        }
        if( arrayLeft[i] < arrayRight[j])
        {
            mergedArray.push(arrayLeft[i]);
            i++;
        } else {
            rc+=arrayLeft.length-i;
            mergedArray.push(arrayRight[j]);
            j++;
        }
    }
    return {
        array:mergedArray,
        counter:rc
    }

}