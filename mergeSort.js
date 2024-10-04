const merge = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let arrayMerged = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) 
            arrayMerged.push(arr1[i++]);
        else
            arrayMerged.push(arr2[j++]);
    }

    while(i < arr1.length) 
        arrayMerged.push(arr1[i++]);
    while(j < arr2.length)
        arrayMerged.push(arr2[j++])

    return arrayMerged;
}

const mergeSort = (array) => {
    let arraySize = array.length;
    let mid = Math.ceil(arraySize / 2);

    if (arraySize === 1) {
        return [array[0]];
    }

    return merge(mergeSort(array.slice(0,mid)), mergeSort(array.slice(mid)))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))