function main() {
    // Number of elements (first line)
    var n = parseInt(readLine());
    // console.log(n);
    arr = readLine().split(' ');
    arr = arr.map(Number);
    // Array of numbers
    // console.log (arr);

    // Start count for positive, negative and zero elements to 0
    let positive = negative = zero = 0;
    for (i = 0; i < n; i ++) {
        let currentElement = arr[i];
        if (currentElement > 0){
            positive ++;
        } else if (currentElement < 0){
            negative ++;
        } else {
            zero ++;
        }
    }
    // toFixed converts a number to a string to 6 decimals
    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}
