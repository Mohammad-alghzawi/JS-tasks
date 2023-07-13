/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/


let grade = 50;

let result;

if(grade < 50){ 
    result = "Fail";
}

else if (grade <= 59) {
    result = "E";
}

else if (grade <= 69) {
    result = "D";
}

else if (grade <= 79) {
    result = "C";
}

else if (grade <= 89) {
    result = "B";
}

else if (grade <= 100) {
    result = "A";
}

console.log(result);


