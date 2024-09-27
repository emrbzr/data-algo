// Pick pivot (last element is my pick)
// Recursive
const quickSort = (arr, low, high) => {
    if(!arr) return [];
    if(high - low + 1 <= 1) return arr;

    let pivot = arr[high]; // take the last element;
    let pointer = low; // set pointer at initial index.

    for(let i = low; i < high; i++) {
        if(arr[i] < pivot) {
            const temp = arr[pointer];
            arr[pointer] = arr[i];
            arr[i] = temp;
            pointer++;
        }
    }
    arr[high] = arr[pointer];
    arr[pointer] = pivot;

    quickSort(arr, low, pointer - 1);  // sort left side
    quickSort(arr, pointer + 1, high); // sort right side

    return arr;
};

const arr = [2,8,5,3,9,4,1];
console.log(quickSort(arr, 0, arr.length - 1));
// O(nlogn) best case, worst case O(n^2) time
// Not a stable sorting algo