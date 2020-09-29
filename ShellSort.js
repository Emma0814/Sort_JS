function shellSort(array) {
    let gap = array.length;
    do {
        gap = Math.floor(gap / 5) + 1;
        for (let i = gap; i < array.length; i++) {
            let temp = 0;
            let j = i - gap;
            if (array[i] < array[j]) {
                temp = array[i];
				for (; j >= 0 && temp < array[j]; j -= gap)
                    array[j + gap] = array[j];
				array[j + gap] = temp;
            }
        }
    } while (gap > 1);
    return array;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr.slice(0)));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
