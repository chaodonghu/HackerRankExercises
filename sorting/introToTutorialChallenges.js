function processData(input) {
    //Enter your code here
    // Input is a string

    // Replace all linebreaks with a space
    input = input.replace(/[\n]/g, " ");
    // Convert string into array
    let inputArray = input.split(" ");

    // Target is the first element
    let target = inputArray[0];
    // Length of numArray is the second element
    let length = inputArray[1];

    // Remove first 2 elements in array to get the numArray
    let numArray = inputArray.slice(2)

    // Iterate through the numArray and find the index in which the target number lies
    for (var i = 0; i < length; i++) {
        if (numArray[i] === target) {
            console.log(i);
        }
    }
} 
