function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    // Instantiate hash table/associative array
    let map = { };
    // Instantiate replicable to be true
    let replicable = true;

    // Iterate through magazine array
    for ( let i of magazine ) {

        // Map each word as the key and count, if it is already present then add one to the count
        map[i] = (map[i] || 0) + 1;
    }

    // Iterate through ransom array
    for ( let i of ransom ) {
        // Map each word as the key and count, if it is already present then subtract from the count
        map[i] = (map[i] || 0) - 1;
    }

    // Iterate through the associative array
    for ( let i in map ) {
        // If the word count is less than 0 on any of the words in the map array then
        //  the ransom phrase is not replicable using the magazine words
        if ( map[i] < 0 ) {
            replicable = false;
            break;
        }
    }
    // Utilizing the logical operator, if replicable is true then print 'YES' else print 'NO'
    console.log(replicable ? 'Yes' : 'No');
}
