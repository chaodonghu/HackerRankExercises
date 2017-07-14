function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    // process.stdout.write("" + result + "\n");
    // Find the maximum value in the array using the spread operator
    const max = Math.max(...ar);

    // console.log(max);

    // Filter out the candles (array) which match the max and find the length of this array
    const numberOfCandles = ar.filter(x => x === max).length

    console.log(numberOfCandles)
}
