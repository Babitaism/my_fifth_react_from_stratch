function calculateSum(arr, num) {
  let blankarray = [];
  let len = arr.length;
  for (let i=0;i<len;i++) {
    let ch =""
    for(let j = 1;j<len;j++){
      if(num== arr[i]+arr[j]){
        blankarray.push(arr[i]+ch+arr[j])
      }
    }
    if( num == arr[i]){
      blankarray.push(arr[i])
    }
  }
  return blankarray
}

let x = calculateSum([1, 2, 3, 4, 5, 6],6);
console.log(x)
