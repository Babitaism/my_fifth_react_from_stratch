// function rightDiagonalChecker(array) {
//   let len = array.length;
//   let newArray = [];
//   for (let i=0;i<len;i++) {
//     for (let j=0;j<len;j++) {
//       if (len-1 == i+j) {
//         newArray.push(array[i][j]);
//       }
//     } 
//   }
//    let flag,element
//   for (let j in newArray) {
//       if (newArray[0] == newArray[j]) {
//         flag = true;
//         element = newArray[j]
//       }
//       else{
//         flag = false
//         element = null
//       }
//     }
//   return {status : flag, character : element}
// }

// function rowChecker(array) {
//   let flag,element
//   let flag1 = false
//   for (let i in array) {
//     flag = true;
//     if(flag1==true){
//       break
//     }
//     let arr = array[i];
//     for (let j in arr) {
//       if(arr[j]==""){
//         flag = false;
//         flag1 = false
//         element = null
//       }
//       if (arr[0] != arr[j]) {
//         flag = false;
//         flag1 = false
//         element = null
//         break
//       }
//       else{
//         flag1 = true
//         element = arr[i]
//       }
//     }
//   }
//   return {status : flag1, character : element}
// }

// function leftDiagonalChecker(array) {
//   let len = array.length;
//   let newArray = [];
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j <= i; j++) {
//       newArray.push(array[i][j]);
//     }
//   }
//   let flag,element
//   for (let j in newArray) {
//       if (newArray[0] == newArray[j]) {
//         flag = true;
//         element = newArray[j]
//       }
//       else{
//         flag = false
//         element = null
//       }
//     }
//   return {status : flag, character : element}
// }

// function columnChecker(array) {
//   let length = array.length;
//   let newArray = [];
//   for (i = 0; i < length; i++) {
//     let temp = [];
//     for (let j = 0; j < length; j++) {
//       temp.push(array[j][i]);
//     }
//     newArray.push(temp);
//   }
//   let flag, element;
//   let flag1 = false;
//   for (let i in newArray) {
//     flag = true;
//     if (flag1 == true) {
//       break;
//     }
//     let arr = newArray[i];
//     for (let j in arr) {
//       if (arr[j] == "") {
//         flag = false;
//         flag1 = false;
//         element = null;
//       }
//       if (arr[0] != arr[j]) {
//         flag = false;
//         flag1 = false;
//         element = null;
//         break;
//       } else {
//         flag1 = true;
//         element = arr[i];
//       }
//     }
//   }
//   return { status: flag1, character: element };
// }
