// Divide by 2 and sort each half
// then merge them
const mergeSort = (arr) => {
    if(!arr) return [];
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([2,8,5,3,9,4,1]));
// O(nlogn)
//stable