
function start(){
    let array = input.split("\n");
    //console.log(array.length);
    //let array = [1,3, 8, 5, 7, 2, 4, 6];
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
    //console.log(left + ' ... ' +right);
    
    for(let i = 0; i < l; i ++){
        if (typeof left[0] == 'undefined' || left[0] >right[0] ){
            resultArray[i] = right.shift();            
            inversionsCount +=left.length;            
        } else if (typeof right[0] == 'undefined' || left[0] <= right[0]){
            resultArray[i] = left.shift();
           
        } 

    }
    
    //console.log(resultArray);

    return {resultArray, inversionsCount};      
}