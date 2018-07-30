var grade = parseInt(prompt("Enter your grade: "));

if (grade < 100 && grade > 90){
    alert("You have an A")
}
else if (grade <= 89 && grade > 80){
    alert("You have a B")
}
else if (grade <= 79 && grade > 70){
    alert("You have a C")
}
else if (grade <= 69 && grade > 60){
    alert("You have a D")
}
else if (grade <= 59 && grade > 0){
    alert("You have a F")
}
else if ( grade < 0){
    alert("ERROR")
}
else if (grade > 100){
    alert("ERROR")
}
else{
    alert("ERROR")
}