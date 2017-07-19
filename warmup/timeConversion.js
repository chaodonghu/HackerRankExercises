function timeConversion(s) {
    // Complete this function
    let hours = s.substr(0,2);
    // console.log(parseInt(hours));
    let minutes = s.substr(3,2);
    // console.log(minutes);
    let seconds = s.substr(6,2);
    // console.log(seconds);
    let meridies = s.substr(8,2);
    // console.log(PMAM);

    if (hours === '12' && meridies === 'AM') {
      return `00:${minutes}:${seconds}`
    }
    else if (hours !== '12' && meridies === 'PM') {
      // Parse the hours string into an integer and add 12
      return `${parseInt(hours) + 12}:${minutes}:${seconds}`
    } else {
      return `${hours}:${minutes}:${seconds}`
    }
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");
}
