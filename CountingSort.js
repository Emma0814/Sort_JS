function countingSort(array) {
    let B = [];
    let C = [];
    let min = max = array[0];
    for (let i = 0; i < array.length; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (let j = min; j < max; j++)
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    for (let k = array.length - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];  // from sum = 1
        C[array[k]]--;
    }
    return B;
}
let arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr.slice(0))); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]
