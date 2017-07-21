function maxLen(n, s){
    // Complete this function
    // n = length of string
    // s = string

    // Instantiate empty object to store characters
    var chars = {}

    // Iterate through string and count number of unique characters to object
    for (var i = 0; i < n; i++) {
        chars[s[i]] = (chars[s[i]] || 0) + 1;
    }

    //console.log('chars',chars)

    var foundChars = [];
    var charCombos = [];

    // Loop through object and abstract out each character
    for (var char in chars) {
        // Push character combos by concating the character with element in the foundChars array
        for (var j = 0; j < foundChars.length; j++) {
            charCombos.push(char + foundChars[j]);
        }
        // Push characters into foundChars array
        foundChars.push(char)
    }

    // console.log('charCombos', charCombos)
    // console.log('foundChars', foundChars)

    // If it is not possible to print out a string then 0 will be printed out
    var max = 0;
    for (var c = 0; c < charCombos.length; c++) {
        // Instantiate new RegExp with the each character combos
        var rx = new RegExp ('[^' + charCombos[c] + ']', 'g');

        //console.log(rx);

        // Instantiate new string and delete all possible character combos from input string
        var string = s.replace(rx, '');

        // Instantiate solution to be true
        var solution = true;

        // Loop through string and see if the adjacent letter is the same as the current letter
        for (var k = 0; k < string.length; k++) {
            if (string[k] === string[k+1]) {
                // if there are adjacent letters then just break out of the loop
                solution = false;
                break;
            }
        }
        // If there are no adjacent letters, then there is a solution
        //  the max is thus the string's length
        if (solution) {
            if (string.length > max) {
                max = string.length;
            }
        }
    }
    return max;
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = maxLen(n, s);
    process.stdout.write(""+result+"\n");

}
