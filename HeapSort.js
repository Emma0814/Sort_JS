function heapSort(array) {
    let len = array.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--)
        heapAdjust(array, i, len);
    for (let i = len - 1; i >= 1; i--) {
        [array[0], array[i]] = [array[i], array[0]]
        heapAdjust(array, 0, --len);
    }
    return array;
}
function heapAdjust(arr, x, len) {
    let leftChild = 2 * x + 1;
    let rightChild = 2 * x + 2;
    let largest = x;
    let temp;
    if (l < len && arr[l] > arr[largest])
        largest = l;
    if (r < len && arr[r] > arr[largest])
        largest = r;
    if (largest != x) {
        [array[x], array[largest]] = [array[largest], array[x]]
        heapAdjust(arr, largest, len);
    }
}
let arr = [91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));
//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
