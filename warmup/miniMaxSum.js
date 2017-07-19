function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    // console.log(arr)

    // Sort array in ascending order
    let sortAscending = arr.sort(function(a,b) {
        return a - b;
    });

    //console.log(sortAscending);

    // Take first 4 elements of the sorted array and return the sum of all elements using reduce
    let minSum = sortAscending.slice(0,4).reduce(function(a,b){
        return a + b;
    });

    // console.log(minSum);

    // Take elements 1 - 5 of the sorted array and reutnr the sum of all elements using reduce
    let maxSum = sortAscending.slice(1,5).reduce(function(a,b){
        return a + b;
    });

    // console.log(maxSum);

    console.log(minSum,maxSum);
    }
