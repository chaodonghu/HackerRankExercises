function processData(input) {
    //Enter your code here

    // Convert input into array by taking the second line
    const array = input.split('\n')[1].split(' ').map(Number);
    // Instantiate the pivot to be the first element of the array
    const pivot = array[0]

    // Instantiate empty arrays of left, equal and right
    let left = [];
    let equal = [];
    let right = [];

    // Loop through the array
    for (var i = 0; i < input[0]; i++) {
        // If the element is less than the pivot then add the element to the left array
        if (array[i] < pivot) {
            left.push(array[i])
        // If the element is equal to the pivot add it to the equal array
        } else if (array[i] === pivot) {
            equal.push(array[i])
        // If the element is greater than the pivot then add it to the right array
        } else {
            right.push(array[i])
        }
    }
    // Concat all 3 arrays together and convert it to a string
    console.log(left.concat(equal).concat(right).join(' '));
} 
