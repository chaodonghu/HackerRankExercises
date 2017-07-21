function main() {
    var S = readLine();
    // console.log(S)

    // Instantiate the number of changed letters to be 0
    let NumChangedLetters = 0;

    // Loop through every 3 letters
    for (let i = 0; i < S.length; i = i + 3) {

        // If the first of the 3 letters is not S then add 1 to the count
        if (S.charAt(i) != 'S') {
            NumChangedLetters++;
        }

        // If the second of the 3 letters is not S then add 1 to the count
        if (S.charAt(i + 1) != 'O') {
            NumChangedLetters++;
        }

        // If the third of the 3 letters is not S then add 1 to the count
        if (S.charAt(i + 2) != 'S') {
            NumChangedLetters++;
        }
    }

    // Output the result
    console.log(NumChangedLetters);
};
