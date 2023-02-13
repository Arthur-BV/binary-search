var mArray = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
var target = 110;
var rStart = 0;
var rFinish = mArray.length - 1;
// console.log("Array finish: ", rFinish);

// Iteration Method
function fBinarySearchIt(arr, target, min, max) {
    let mid = 0;

    while (min <=  max) {
        mid = Math.floor((min + max)/2);
        // console.log("Mid: ", mid);

        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            min = mid + 1;
        } else {
            max = mid - 1
        } 
    }

    return -1;
}

console.log("Iteration Method: ", fBinarySearchIt(mArray, target, rStart, rFinish));

// Recursive Method (The recursive method follows the divide and conquer approach)
function fBinarySearchRec(arr, target, min, max) {
    let mid = 0;

    if (min > max) {
        return -1;
    } else {
        mid = Math.floor((min + max)/2);
        // console.log("Mid: ", mid);

        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            return fBinarySearchRec(arr, target, mid + 1, max);
        } else {
            return fBinarySearchRec(arr, target, min, mid - 1);
        } 
    }
}

console.log("Recursive Method: ", fBinarySearchRec(mArray, target, rStart, rFinish));
