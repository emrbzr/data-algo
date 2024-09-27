//Incrementally sort (each subarray)
const insertionSort = (arr) => {
    if(!arr) return [];

    for(let i = 0; i < arr.length; i++) {
        let j = i - 1;
        while(j >= 0 && arr[j + 1] < arr[j]){
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
            j--;
        }
    }
    return arr;
};



console.log(insertionSort([2,8,5,3,9,4,1]));
// O(n^2) worst case, best case is O(n)
// Stable