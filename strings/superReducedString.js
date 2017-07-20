function super_reduced_string(s){
    // Complete this function

    // Convert string into an array of strings
    s = s.split('')

    // Iterate through the array of strings
    for (var i = 0; i < s.length; i++) {
        // Check if the current element is equal to the next element
        if (s[i] === s[i + 1]) {
            // If true then, start at index position i and remove 2 items (adjacent letters of the same value)
            s.splice(i, 2);
            // Then set the index to -1 so you start at the beginning of the array of strings once again
            i = -1;
        }
    }

    // If the array of strings is empty then output Empty String
    if (s.length === 0) {
        return 'Empty String'
    } else {
        // Else, join the array of strings into a string and output the string
        return s.join('')
    }
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");
}
