function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key)
            array[j + 1] = array[j--];
        array[j + 1] = key;
    }
    return array;
}
function insertionSort2(array) {
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let left = 0;
        let right = i - 1;
        while (left <= right) {
            let mid = parseInt((left + right) / 2);
            if (key < array[mid])
                right = middle - 1;
            else
                left = middle + 1;
        }
        for (let j = i - 1; j >= left; j--)
            array[j + 1] = array[j];
        array[left] = key;
    }
    return array;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertionSort(arr));
console.log(insertionSort2(arr));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
