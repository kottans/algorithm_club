let unsorted = [4,6,3,1,5,7,2,11]

function mergeSort(arr) {
  if (arr.length <= 2) {
    if(arr.length == 1) {
      return arr
    }
    return arr[0]<arr[1] ? [arr[0],arr[1]] : [arr[1],arr[0]]
  }
  
  let sorted = []
  let div = Math.ceil(arr.length/2)
  let arr1 = mergeSort(arr.slice(0, div))
  let arr2 = mergeSort(arr.slice(div))
  
  while(arr1.length||arr2.length) {
    if(arr1.length&&arr2.length){
      if(arr1[0] < arr2[0]) {
        sorted.push(arr1[0])
        arr1.splice(0,1)
      } else {
        sorted.push(arr2[0])
        arr2.splice(0,1)
      }
    } else {
      sorted = sorted.concat(arr1.length ? arr1 : arr2)
      arr1 = []
      arr2 = []
    }
  }
  
  return sorted
}

document.getElementById('a').innerHTML = mergeSort(unsorted)