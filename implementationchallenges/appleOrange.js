function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);

    // Instantiate the count of both apples and oranges to 0
    let apples = 0;
    let oranges = 0;

    // Iterate through the apples array and check if it's location is landed on Sam's house, if it is append the counter
    for (var i = 0; i < apple.length; i ++) {
        if (((apple[i] + a) >= s) && ((apple[i] + a) <= t)) {
            apples += 1;
        }
    }

    // Iterate through the oranges array and check if it's location is landed on Sam's house, if it is append the counter
        for (var i = 0; i < orange.length; i ++) {
        if (((orange[i] + b) >= s) && ((orange[i] + b) <= t)) {
            oranges += 1;
        }
    }

    // Log both count
    console.log(apples)
    console.log(oranges)
}
