
function start(){
    let array = input.split("\n").map(item => {
    return parseInt(item, 10)});
    //console.log(array.length);
    //let array = [10,3, 4, 5, 7, 1, 8, 9, 2, 6];
    return countArray(array);
};

function countArray(arr){ 
    let res = count(arr);    
    return res.inversions;
};

function count(arr){
    let n = arr.length;
    let inversions = 0;    
    let result;    
    if(n > 1) {
        let mid = Math.ceil(n/2);
        let l = arr.slice(0,mid);
        let r = arr.slice(mid,n);        
        let left = count(l);
        let right = count(r);  
        let {resultArray, inversionsCount} = merge(left.result,right.result);   
        
        inversions = left.inversions + right.inversions;
        inversions +=inversionsCount; 
        
        result = resultArray;                
    } else {
        result = arr;
    }
    
    return {result,inversions};
}

function merge(left, right){
    let inversionsCount = 0;    
    let l = left.length + right.length;
    let resultArray = new Array(l);
    //console.log(left + ' <-> ' +right);
    
    for(let i = 0; i < l; i ++){
        if (typeof left[0] == 'undefined' || left[0] >right[0] ){
            resultArray[i] = right.shift();            
            inversionsCount +=left.length;   
            //inversionsCount ++;         
        } else if (typeof right[0] == 'undefined' || left[0] <= right[0]){
            resultArray[i] = left.shift();
           
        } 

    }
    
    //console.log(resultArray);
    //console.log(inversionsCount);

    return {resultArray, inversionsCount};      
}