function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());

    // Instantiate encoded string
    var encodedString = '';

    // Loop through each character
    for (var i = 0; i < n; i ++) {

        // Instantiate character variable
        var character = s[i];

        // Check if the character is a letter
        // The i modifier is used to perform case-insensitive matching
        if (character.match(/[a-z]/i)) {

                    // Get the ASCII code of the letter
                    var ASCIICode = s.charCodeAt(i);

                    // console.log(ASCIICode)

                    // If the letter is uppercase (65 - 90 are A-Z)
                    if ((ASCIICode >= 65) && (ASCIICode <=90)) {
                        // Replace the character by substracting the beginning of the alphabet, finding the
                        // remainder after dividing by length of the alphabet and adding the beginning of the alphabet
                        character = String.fromCharCode(((ASCIICode - 65 + k) % 26) + 65);

                    // If the letter is lowercase (96 - 122 are a-z)
                    } else if ((ASCIICode >= 97) && (ASCIICode <= 122))
                        // Replace the character by substracting the beginning of the alphabet, finding the
                        // remainder after dividing by length of the alphabet and adding the beginning of the alphabet
                        character = String.fromCharCode(((ASCIICode - 97 + k) % 26) + 97);
                    }
        // Add the character to the encoded string
        encodedString += character
    }
    // Print the encoded string
    console.log(encodedString)
}
