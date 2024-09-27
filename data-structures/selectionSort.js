const selectionSort = (arr) => {
    if(!arr) return [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
};



console.log(selectionSort([2,8,5,3,9,4,1]));
// O(n^2) tim