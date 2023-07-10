/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
switch (f = 50){
  case f<50:
    console.log("fail");
    break;
case f>=50&&f<=59:
    console.log("E");
    break;
case f>=60&&f<=69:
    console.log("D");
    break;
case f>=70&&f<=79:
    console.log("C");
         break;
case f>=80&&f<=89:
    console.log("B");
        break;
case f>=90&&f<=100:
    console.log("A")
        break;
}

