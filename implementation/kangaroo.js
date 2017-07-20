function kangaroo(x1, v1, x2, v2) {
    // Complete this function
    // If kangaroo 1's position(x) and velocity(y) are both less than kangaroo 1's x and v then they will never meet
    if (x1 < x2 && v1 < v2) {
        return 'NO'
    // In all other cases, there is a possibility
    } else {
        // Calcuate the x difference between the two starting positions
        const xDiff = Math.abs(x1 - x2);
        // console.log(xDiff)
        // Calculate the v differences between the two velocities
        const vDiff = Math.abs(v1 - v2);
        // console.log(vDiff)

        // If the displacement is 0 (divide the position over velocity) then they will meet.
        if (xDiff % vDiff === 0) {
            return 'YES'
        } else {
            return 'NO'
        }
    }
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}
