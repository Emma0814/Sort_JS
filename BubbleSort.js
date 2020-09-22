function bubbleSort1(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1])
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
}
function bubbleSort2(arr) {
    for (let i = arr.length - 1; i >0;) {
      let pos = 0;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          pos = j;
        }
      }
      i = pos;
    }
    return arr;
}
function bubbleSort3(arr) {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        for (let j = low; j < high; j++)
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        high--;
        for (let j = high; j > low; j--)
            if (arr[j] < arr[j - 1])
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        low++;
    }
    return arr;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort1(arr));
console.log(bubbleSort2(arr));
console.log(bubbleSort3(arr));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50];
