function main() {
    var n = parseInt(readLine());
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }

    // Utilize sort method
    var sorted = unsorted.sort(function(a, b) {
        // If the elements being compared in the array are of equal length then compare their values
        if(a.length == b.length){
            // If a is bigger than b then return positive, else return negative, this returns
            //  a new array sorted in ascending order
            return a > b ? 1 : -1;
        }
        // If the lengths are not the same then return the result of subtracting the current elements length
        //  to the next elements length, returning positive, zero or negative.
        return a.length - b.length;
    });
    // Print out the sorted array in ascending order and seperate each value on a new line.
    console.log(sorted.join('\n'))
}
