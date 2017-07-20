function getRecord(s){
    // Complete this function

    // Instantiate the counts
    let highestCount = 0;
    let lowestCount = 0;

    // Make the lowest and highest records the first element in the array
    let highest = s[0];
    let lowest = s[0];

    // Loop through the array and if the element is higher/lower then the current highest number,
    // make that element the highest/lowest number and add to the count.
    for (let i = 0; i < s.length; i ++) {
        if (s[i] > highest) {
            highest = s[i];
            highestCount += 1;
        } else if (s[i] < lowest) {
            lowest = s[i];
            lowestCount += 1;

        }
    }
    return [highestCount, lowestCount]
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));
}
