function bucketSort(array, num) {
    if (array.length <= 1)
        return array;
    let buckets = [];
    let min = max = array[0];
    for (let i = 1; i < array.length; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
    let space = (max - min + 1) / num;
    for (let j = 0; j < array.length; j++) {
        let index = Math.floor((array[j] - min) / space);
        if (buckets[index]) {   //  非空桶，插入排序
            let k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j])
                buckets[index][k + 1] = buckets[index][k--];
            buckets[index][k + 1] = array[j];
        } else {    //空桶，初始化
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    let result = [];
    for (let n = 0; n < num; n++)
        result = result.concat(buckets[n]);
    return result;
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bucketSort(arr.slice(0), 4));
//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
