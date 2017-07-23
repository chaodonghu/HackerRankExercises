function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    // Instantiate new rotatedArray
    //  Output an array with just the kth element, then append to the end the original array with kth element removed,
    //  use the join method to turn array into string.
    let rotatedArray = a.splice(k).concat(a).join(' ')

    console.log(rotatedArray)
}
