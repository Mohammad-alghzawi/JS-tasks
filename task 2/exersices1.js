/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
let num = 5;
let num1 = 7;
if (num1 > num) {
  console.log(num1);
} else {
  console.log(num);
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let a =3
let w =-7
let s =2
let pro = a*w*s
if( a > 0 ){
    console.log("positive")
}
else{
    console.log("negative")
}
alert(pro)



/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let p=0
let c=-1
let m=4
if( p > m && p > c ){
    if( m > c )
    alert( ` mohammad ${p} ${m} ${c}` )
    else{
        alert(` mohammad ${p} ${c} ${m}`)
    }
}
if( c > p && c > m){
    if( p > m )
    alert(`  mohammad ${c} ${p} ${m}`)
    else{
        alert(`  mohammad ${c} ${m} ${p}`)
    }
}
if( m > p && m > c ){
    if( p > c)
    alert(` mohammad ${m} ${p} ${c}`)
    else{
        alert(`mohammad ${m} ${c} ${p}`)
    }
}
/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let n=-5
let o=-2
let g=-6
let q=0
let e=-1
if(n>o && n>g && n>q && n>e){
    window.alert(n)
}  
else if( o>n && o>g && o>q && o>e ){
    window.alert(o)
}  
else if( g>n && g>o && g>q && g>e){
    window.alert(g)
}
else if(q>n && q>o && q>g && q>e){
    window.alert(q)
}
else if(e>n && e>o && e>g && e>q){
    window.alert(e)
}


/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x = 24
let y = 12;
if(x>y){
  alert("Hello world")
    
}
else{
alert("goodbye");    }

/******* End Your Code ********* */
