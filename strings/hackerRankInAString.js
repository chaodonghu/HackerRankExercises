function main() {
    var q = parseInt(readLine());

    // Helper function that checks if the subsequence 'hacker rank' exists
    function subsequenceExists(str) {

            // Instanitate the hacker rank constant
            const hackerrank = "hackerrank";

            // Instantiate the index to start at 0
            let indexCount = 0;

            // Loop through the string
            for (var i = 0; i< str.length; i++) {

                // If the character in the string is equal to the current index of the hackerrank constant then
                //  append one to the index count
                if (str.charAt(i) == hackerrank.charAt(indexCount)) {
                    indexCount++;
                }

                // If the indexCount is equal to the hackerrank constant length (10) then return true
                if (indexCount == hackerrank.length) {
                    return true;
                }
            }
            // If both cases are not satisfied return false
            return false;
        }

    for (var a0 = 0; a0 < q; a0++) {
        var s = readLine();

        // If true then return yes if false then return no.
        if (subsequenceExists(s)) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}
