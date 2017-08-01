function main() {
    var s = readLine();
    var n = parseInt(readLine());
    // Run the createLetterWeightValueTable function
    const weightTable = createLetterWeightValuesTable();
    const weights = createWeight(s, weightTable);
    for(var a0 = 0; a0 < n; a0++){
        var x = parseInt(readLine());
        // your code goes here
        console.log(weights.has(x) ? "Yes" : "No")
    }
}

// Helper function which returns a hashTable with the alphabet as keys,
//  and the values as the weights
function createLetterWeightValuesTable() {
    // Instantiate an alphabet arry
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Instantiate the total to be 0
    let total = 0;
    // Utilize reduce which method on the alphabet array
    const alphabetTable = alphabet.reduce(function(obj, item) {
        // If the letter does not exist in the hash table, add it to the hash table
        //  and set it's value to 0
        if(!obj[item]) {
            obj[item] = 0;
        }
        // Add the total and 1 to the letter's value
        obj[item] = total + 1;
        // Each consecutive letter with have a value that is more more then the
        //  previous letter
        total++;
        return obj;
    }, {});
    return alphabetTable;
}

// Takes in a string and the weight table
function createWeight(string, weightTable) {
    // Instantiate an empty string
    let last = "";
    // Instantiate a count starting at 0
    let count = 0;
    // Generate a new obj of weights
    const weights = new Set();
    // Loop through each letter of the string
    for (let letter of string) {
        // Let the num equal to the value of the current letter in the weightTable obj
        let num = weightTable[letter];
        if (!last) {
            last = letter;
            count = num;
            weights.add(count);
        } else if (last === letter) {
            count += num;
            weights.add(count);
        } else {
            weights.add(num);
            last = letter;
            count = num;
        }
    }
    return weights;
}
