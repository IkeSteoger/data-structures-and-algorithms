'use strict';

// function merge(left, right, array){
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while(i < left.length && j < right.length){
//     if(left[i] <= right[j]){
//       array[k] = left[i];
//       i++;
//     } else {
//       array[k] = right[j];
//       j++;
//     }
//     k++;
//   }
//   if(i === left.length){
//     array.push(right.shift());
//   } else {
//     array.push(left.shift());
//   }
// }

// function mergeSort(array){
//   let n = array.length;
//   if(n>1){
//     let mid = n/2;
//     let left = array.slice(0, mid);
//     let right = array.slice(mid, n);
//     mergeSort(left);
//     mergeSort(right);
//     merge(left,right,array);
//   }
//   return array;
// }

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = {
  mergeSort
};
