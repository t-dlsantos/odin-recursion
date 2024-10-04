function mergeSort(array) {
    let high = array.length;
    let mid = Math.ceil(high / 2);

    if (high === 1) {
        return [array[0]];
    }

    const merge = (arr1, arr2) => {
        let i = 0;
        let j = 0;
        let k = 0;

        let arrayMerged = [];

        while (i < arr1.length && j < arr2.length) {

            if (arr1[i] < arr2[j]) {
                arrayMerged[k++] = arr1[i++];
            } else if (arr2[j] < arr1[i]) {
                arrayMerged[k++] = arr2[j++];
            } else if (arr1[i] == arr2[j]) {
                arrayMerged[k++] = arr1[i++];
                arrayMerged[k++] = arr2[j++];
            }
        }
        for(; i < arr1.length; i++) {
            arrayMerged[k++] = arr1[i];
        }

        for(; j < arr2.length; j++) {
            arrayMerged[k++] = arr2[j];
        }

        return arrayMerged;
    }

    return merge(mergeSort(array.slice(0,mid)), mergeSort(array.slice(mid,high)))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
