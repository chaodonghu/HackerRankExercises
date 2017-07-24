function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);

        let costofFlavors = {};
        for (let i=0;i<a.length;i++) {
            let iceCreamCost = a[i];
            let moneyLeft = m - iceCreamCost;
            // Determines if the object has a property with the specified variable
            //  If cost has a key that is equal to the money left then,
            //  print the index of the money left + 1 (because of the ID starting at 1)
            //  and the current element + 1
            if (costofFlavors.hasOwnProperty(moneyLeft)){
                console.log((a.indexOf(moneyLeft) + 1), (i + 1));
                // exit the loop because we found a match
                break;
            } else {
                // If we don't find a key that is equal to the money left then
                //  append a new key to the cost object or add one to that current key
                costofFlavors[iceCreamCost] = costofFlavors[iceCreamCost] + 1 || 1;
            }
        }
    }
}
