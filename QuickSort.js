function quickSort(arr, left, right){
    if(left <= right){
        let i = left;
        let j = right;
        let temp = arr[left];
        while(i < j){
            while(i < j && arr[j] >= temp)
                j--;
            while(i < j && arr[i] <= temp)
                i++;
            if (i < j)   // swap(i, j)
                [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        // i == j, swap(i, temp)
        [arr[temp], arr[i]] = [arr[i], arr[temp]];
        quickSort(arr, left, i - 1);
        quickSort(arr, i + 1, right);
    }
    return arr;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr));
