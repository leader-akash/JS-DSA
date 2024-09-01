import React from 'react'

const Dsa = () => {

// 1. Reverse a string

const str = "hello";

const  reverseStr = (str) => {
   return str.split("").reverse().join('');
    
}
console.log('reverse', reverseStr(str))

// 2. find max number in an array 

const arr = [99,3,5,2,5,74,6666];
let max  = 0;
const findMax = (arr) => {
    // return Math.max(...arr);
    for(let i =0; i<arr.length; i++){
        if(max < arr[i])
        max = arr[i];
    }
    return max;

}

console.log('findMax', findMax(arr));


// 3. Remove duplicates from an array

const dupliarr = [1,2,2,3,4,5,6,3,7,8,8];
let temp = []
const removeDuplicate = (arr) => {
    // return [...new Set(arr)]

    for(let i=0; i<arr.length; i++){
        let isSame = false;
        for(let j=0; j<temp.length; j++){
            if(arr[i] === temp[j]){
                isSame = true;
                break;
            }
        }
        if(!isSame){
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log('removeDuplicate',  removeDuplicate(dupliarr))


// 4. Map prototype;

const arrray = [1,2,3,4,5];

Array.prototype.myMap = function(cb) {
    let temp = [];

    for(let i =0; i<this.length; i++) {
        temp.push(cb(this[i], i ,this));
    }
    return temp;
}

Array.prototype.myFilter = function(cb){
    let temp = [];

    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(cb(this[i]), i, this)
        }
    }
}

Array.prototype.myReduce = function(cb, initial){
    let acc = initial;

    for(let i=0; i<this.length; i++){
        acc = acc ? cb(acc, this[i], i ,this) : this[i]; 
    }
    return acc 
}

const sum = arrray.myReduce((acc,el) => {
     return  acc + el;
     
},0  ) 

console.log('sum', sum)

// 5. Flatten an array

const flat = [1, [2, [3, [4, 5]]]];

function flatenArr(arr) {

    return arr.reduce((flat, toFlat) => 
        flat.concat(Array.isArray(toFlat) ? flatenArr(toFlat) : toFlat), []
        )
}

console.log('flat', flatenArr(flat));


// 6. find non repeating char in String;

const strring = "sswwiissn";

function findNonRepeatStr (str) {
    let charCount = {};

    for(let char of str) {
        charCount[char] =   (charCount[char] || 0) + 1;
    }

    for(let char of str) {
        if(charCount[char] === 1){
            return char;
        }
    }
}

console.log('norepeat', findNonRepeatStr(strring));

// 7. Merge two sorted arrays

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

// console.log(arr2.concat(arr1))

const mergeSortedArr = (arr1, arr2) => {
    let mergeArr = [];
    let merged = []
    let i = 0, j = 0;
    
    while (i <= arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // for(let i=0; i<arr1.length; i++){
    //     for(let j=0; j<arr2.length; j++){
    //         if(arr1[i] > arr2[j]){
    //             mergeArr.push(arr2[j]);
    //             break;
    //         }
    //         if(arr1[i] > arr2[j]){
    //         mergeArr.push(arr2[j])
    //             break;
    //     }
    //     }
    // }
    return merged;
}

console.log('mergeArr',  mergeSortedArr(arr1,arr2));

// 8. Binary search in a sorted Array;


const sortedArr = [1,2,3,4,5,6];
const target =6;

function binarySearch(arr, target) {
    const n = arr.length;

    // for(let i=0; i<n; i++){
    //     if(arr[i] === target)
    //         return i;
    // }

    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

console.log("binarySearch", binarySearch(sortedArr, target))



  return (
    <div>Frontend DSA</div>
  )
}

export default Dsa