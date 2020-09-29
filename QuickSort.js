function quickSort1(arr, left, right){
    if(left <= right){
        let i = left;
        let j = right;
        let temp = arr[left];
        while(i < j){
            while(i < j && arr[j] >= temp)
                j--;
            while(i < j && arr[i] <= temp)
                i++;
            if (i < j)
                [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[left], arr[i]] = [arr[i], arr[left]];
        quickSort1(arr, left, i - 1);
        quickSort1(arr, i + 1, right);
    }
    return arr;
}
function quickSort2(arr, left, right){
    if(left <= right){
        let i = left;
        let j = right;

        let mid = i + Math.floor((j - i) / 2);
        if (arr[i] > arr[j])
            [arr[i], arr[j]] = [arr[j], arr[i]];
		if (arr[mid] > arr[j])
            [arr[mid], arr[j]] = [arr[j], arr[mid]];
		if (arr[mid] > arr[i])
            [arr[mid], arr[i]] = [arr[i], arr[mid]];

        let temp = arr[left];
        while(i < j){
            while(i < j && arr[j] >= temp)
                j--;
            while(i < j && arr[i] <= temp)
                i++;
            if (i < j)
                [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[left], arr[i]] = [arr[i], arr[left]];
        quickSort2(arr, left, i - 1);
        quickSort2(arr, i + 1, right);
    }
    return arr;
}
function quickSort3(arr, left, right){
    if(left <= right){
        let i = left;
        let j = right;
        let temp = arr[left];
        while(i < j){
            while(i < j && arr[j] >= temp)
                j--;
            arr[i] = arr[j];                  //
            while(i < j && arr[i] <= temp)
                i++;
            arr[j] = arr[i];                  //
        }
        arr[i] = temp;
        quickSort3(arr, left, i - 1);
        quickSort3(arr, i + 1, right);
    }
    return arr;
}
function quickSort4(arr, left, right){
    while(left <= right){
        let i = left;
        let j = right;
        let temp = arr[left];
        while(i < j){
            while(i < j && arr[j] >= temp)
                j--;
            while(i < j && arr[i] <= temp)
                i++;
            if (i < j)
                [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        [arr[left], arr[i]] = [arr[i], arr[left]];
        quickSort1(arr, left, i - 1);
        left = i + 1;
    }
    return arr;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort1(arr.slice(0), 0, arr.length - 1));
console.log(quickSort2(arr.slice(0), 0, arr.length - 1));
console.log(quickSort3(arr.slice(0), 0, arr.length - 1));
console.log(quickSort4(arr.slice(0), 0, arr.length - 1));
