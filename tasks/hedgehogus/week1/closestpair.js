let input = [[2, 3], [12, 30], [40, 50], [5, 1], [12, 10], [3, 4], [3, 1], [3, 5]];

function distance(a,b) {
    return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
}

function start() {
    return divAndConq(input);
}

function bruteForce(input){
    let bestPair = [input[0], input[1]];
    let bestDistance = distance(input[0], input[1]);
    for (let i = 0, l = input.length; i < l; i ++){
        for (let j = i+1; j < l; j ++) {
            let d = distance(input[i],input[j]);
            if ( d < bestDistance) {
                bestDistance = d;
                bestPair = [input[i],input[j]];
            }
        }
    }
    return bestPair;
}

function divAndConq(input){
    let sortX = input.slice().sort((a,b) => a[0] - b[0]);
    //let sortY = input.slice().sort((a,b) => a[1] - b[1]);
    console.log(sortX);
    return divide(sortX);
}

function divide(arr){
    var bestDistance;
    var bestPair;
    var resultArr;
    if (arr.length > 1){
        let mid = Math.ceil(arr.length/2);
        var {resultArr, bestPair, bestDistance} = divide(arr.slice(0,mid));
        let left = resultArr;
        let leftPair = bestPair;
        let leftDist = bestDistance;
        var {resultArr, bestPair, bestDistance} = divide(arr.slice(mid,arr.length));
        let right = resultArr;
        let rightPair = bestPair;
        let rightDist = bestDistance;
        //console.log(left );
        //console.log(right);
        //console.log("___");
        
        if (leftDist >= rightDist ){
            bestDistance = leftDist;
            bestPair = leftPair;
        } else {
            bestDistance = rightDist;
            bestPair = rightPair;
        }
        let {split, splitPair, splitDist} = merge(left,right, bestDistance);
        if (splitDist < bestDistance) {
            bestDistance = splitDist;
            bestPair = splitPair;
        }
        resultArr = split;
        
    } else {
        resultArr = arr;
    }
    return {resultArr, bestPair, bestDistance};
}

function merge(left, right, bestDistance){
    
    let splitDist = bestDistance;
    let splitPair;
    let splitArr = left.concat(right);
    
    if (typeof bestDistance == 'undefined'){
        splitDist = distance(left[0],right[0]);
        splitPair = [left[0],right[0]];
    } else {        
        let restArr = splitArr.filter(value => value[0]>=(left[left.length][0]-bestDistance) && value[0] <=(right[0][0]+bestDistance));
        for (let i = 0, l = restArr.length; i < l; i ++){
            for (let j = i+1; j < l; j ++) {
                let d = distance(restArr[i],restArr[j]);
                if ( d < bestDistance) {
                    bestDistance = d;
                    bestPair = [restArr[i],restArr[j]];
                }
            }
        }
    }
     console.log(splitArr);
    return {splitArr,splitPair,splitDist};
}