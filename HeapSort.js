function heapSort(array) {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--)
        heapAdjust(array, i, array.length - 1);
    for (let i = array.length - 1; i >= 1;) {
        [array[0], array[i]] = [array[i], array[0]]
        heapAdjust(array, 0, --i);
    }
    return array;
}
function heapAdjust(arr, start, end) {
    let temp = arr[start];
    for (let i = 2 * start + 1; i <= end;) {
		if (i < end && arr[i] < arr[i + 1])
			i++;
		if (temp >= arr[i])
			break;
		arr[start] = arr[i];
		start = i;
		i = i * 2 + 1;
	}
	arr[start] = temp;
    return arr;
}
let arr = [91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
console.log(heapSort(arr));
//[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
