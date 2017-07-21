function main() {
    var s = readLine();
    // s is the sample input

    // check the number of uppercase letters by taking the length of the string
    //  then subtract the length of the string by the length of the string with uppercase letters removed
    //  this will give you the number of uppercase letters in the string
    var numOfUpperCase = s.length - s.replace(/[A-Z]/g, '').length

    // Add 1 to the number of uppercase letters because of the first word in the string which is not capitalized
    console.log(numOfUpperCase + 1)

}
