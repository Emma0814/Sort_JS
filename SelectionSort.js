function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++)
            min = arr[min] > arr[j] ? j : min;
        if (i != min)
            [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  return arr;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr.slice(0)));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
