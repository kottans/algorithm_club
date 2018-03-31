let inpup = [3,8,2,5,1,4,7,6];

function start(){ 
    let array = input.split("\n").map(item => {return parseInt(item, 10)});  
    let arr =  array;
    let result = partitioning(arr, 0, arr.length);
    console.log(result);
    console.log(arr);
};


function partitioning(arr, first, last){ // including first, not including last   
    
    let comparisons = last-first-1;
    let pivot = first;    
    let j = first; // pivot final position
    
    // using the final element of the given array as the pivot 
    /**
    let temp1 = arr[first];
    arr[first] = arr[last-1];
    arr[last-1] = temp1;*/

    // "median-of-three" pivot rule
    let middleIndex = Math.floor((last-1+first)/2);
    let a1 = arr[first];
    let a2 = arr[last-1];
    let a3 = arr[middleIndex];
        
    let currentPivotIndex;
    if((a1<a2 && a1>a3)||(a1>a2 && a1<a3)){        
        currentPivotIndex = first;
    } else if ((a2<a1 && a2>a3)||(a2>a1 && a2<a3)){
        currentPivotIndex = last-1;        
    } else {
        currentPivotIndex = middleIndex;        
    }

    let temp1 = arr[first];
    arr[first] = arr[currentPivotIndex];
    arr[currentPivotIndex] = temp1;     
    
    for (let i = first; i < last; i++){       
        if (i === pivot) {
            j++;
        } else {
            if (arr[i] < arr[pivot]){            
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                j++;
            }
        }        
    }
        
    let temp = arr[j-1];
    arr[j-1] = arr[pivot];
    arr[pivot] = temp;

    if ((j-1 - first)>1){
        let leftComparisons = partitioning(arr,first, j-1);
        comparisons = comparisons + leftComparisons;
    };

    if(last-j >1) {
        let rightComparisons = partitioning(arr, j, last);
        comparisons = comparisons + rightComparisons;
    };

    return comparisons;
};