function main() {
    var n = parseInt(readLine());
    // console.log(n)
    for (i = 1; i <= n; i ++) {
        line = Array(n).fill(' ');
        // make a new line array, each element is filled with an empty space
        // console.log(line)
        for (j = 0; j < i; j++){
            // replace iteration of array element with hash
            line[j] = '#';
        }
        // Reverse the output and join elements of array into string
        console.log(line.reverse().join(''))
    }
}
