function bubble (arr ){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1] ){
                const val = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = val;
            }
        }
    }
return arr
}



console.log(bubble([1,4,2,7,9,3,5]));


// time complexity of bubble sort function is O(n^2), because there is 2 nested arrays.
