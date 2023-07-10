/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x = 250;
let zakat =.025*250
console .log(zakat)


/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
 let num = [ 17, 9,45 ]
 console .log(num)
 let name =["Str", "alex","moh"]
 console .log(name)
let fox=['the','fox', 'over',"lazy", 'dog',  ]
console.log(fox)
/*;
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"))
console.log(fruits.indexOf("Tomato"))

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let Food=["mansaf","kabsa"]
let sport=["swimming","football","riding hourse"]
let movie=["action","horros"]
console.log(Food)
console.log(sport)
console.log(movie)
/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let number= [1,4,5]
console.log(number[0])
let letters=["t","u","g","x"]
console.log(letters[0])


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let lastOfArray=[1,4,5];
y=lastOfArray[lastOfArray.length-1];
console.log(y);
let last=["t","u","g","x"];
w=last[last.length-1]
console.log(w);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.shift()
array.shift()
array.shift()
array.unshift(1,3,4,6,8)
array.push(10,11)
array.pop()
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5];
console.log(array2.push(1))
console.log(array2.unshift(2))
console.log(array2.shift())
console.log(array2.pop())

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
let Samplearray =[ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(Samplearray.sort());


