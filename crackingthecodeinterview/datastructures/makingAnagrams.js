function main() {

    // Convert a and b strings into arrays
    var a = readLine().split('');
    var b = readLine().split('');

    // 2 for loops to iterate through both lengths of a and b arrays
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            // If the current element of a is equal to the current element of b then remove that element and return
            //  a new array
            if (a[i] === b[j]) {
                a.splice(i,1);
                b.splice(j,1);
                // Then set the iteration of the *a for loop to check from the previous element to the next element in b
                //  this allows all characters to be checked for similarities
                i = i - 1;
                // Break the loop once done.
                break;
            }
        }
    }
    // Output the length of now mutated arrays with characters that are unique to both arrays
    console.log(a.length + b.length)
}
