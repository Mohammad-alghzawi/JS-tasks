/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/


let mark = 80;
switch (true) {
    case (mark < 50):
        
            console.log('Fail');
            break;
        

    case (mark <= 59):
        
            console.log('E');
            break;
        

    case (mark <= 69):
        
            console.log('D');
            break;
        

    case (mark <= 79):
        
            console.log('C');
            break;
        

    case (mark <= 89):
        
            console.log('B');
            break;
        

    case (mark <= 100):
        
            console.log('A');
            break;
        
}
