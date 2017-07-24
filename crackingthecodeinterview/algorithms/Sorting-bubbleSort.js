function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);

    // n is the number of elements in the array
    // a is the array of numbers

    // Set the number of swaps to be 0
    var numberOfSwaps = 0

    // Iterate through the array
    for (var i = 0; i < n; i++) {
        // Set the swap counter to be 0
        swapCounter = 0;
        // Iterate through the array and handle the case where we compare the last element to null
        for (var j = 0; j < n - 1; j++) {
            // If the current element is greater than the next element
            if (a[j] > a[j + 1]) {
                // Splice method returns a new array,
                //  first parameter is the index of the array
                //  second parameter specifies the number of elements to be removed
                //  third parameter specifies the elements to be added to the array
                a.splice(j, 0, a.splice(j+1, 1)[0])
                numberOfSwaps += 1;
                swapCounter += 1;
            }
        }

        if (swapCounter === 0) {
            break;
        }
    }
    console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a.pop()}`);
}
