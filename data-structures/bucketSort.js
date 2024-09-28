// Can only use with constraints
// If we are guaranteed that values fit within finite range.
// Example 0-10000 is ok but -2^32 to 2^32 not OK.

const bucketSort = (arr) => {
    if(!arr) return [];
    if(arr.length <= 1) return arr;
    const counts = [0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] += 1;
    }

    let i = 0;
    for (let n = 0; n < counts.length; n++) {
        for (let j = 0; j < counts[n]; j++) {
            arr[i] = n;
            i++;
        }
    }
    return arr;
};


console.log(bucketSort([2,1,2,0,0,2]));
// O(n)
// stable