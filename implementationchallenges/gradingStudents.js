function solve(grades){
    // Complete this function
    // console.log(grades)
    return grades.map((grade) => {
        let difference = 5 - (grade % 5);
        if (difference < 3 && grade >= 38) {
            grade += difference;
        }
        return grade
    })
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
}
