process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input



    // Convert string to lowercase
    input = input.toLowerCase();

    // console.log(input)
    // var alphabet = []
    // for (var i = 97; i <= 122; i++) {
        // Instantiate the alphabet by converting the ASCII codes 97 - 122 into letters.
    //    alphabet.push(String.fromCharCode(i));
    // }

    // var alphabetString = alphabet.join("\n");
    // console.log(alphabetString)

    for(var i = 97 ; i <= 122; i++){
        var alphabet = String.fromCharCode(i);
        // console.log(alphabet)
        // Each letter of the alphabet is being printed on a new line
        // Utilize the string indexOf method to see the first occurance of the specified value,
        //  if equal to -1 that means there is no occurance of the full alphabet therefore it is
        //  not a pangram
        if(input.indexOf(alphabet) == -1){
            console.log("not pangram");
            return;
        }
    }
    console.log("pangram");
});
