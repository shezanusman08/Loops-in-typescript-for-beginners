/*LOOPS: are used to execute a piece of code again and again
 while condition is true

 -------------Types of loops-----------------

for-loop: is repeats untill a specified condition evaluted to false

while loop: used to repeat a specific block of code an 
             specified number of times, until a condition is met.

do-while loop: is same as while loop but it will be print at least one time
                if condition did not met:

for-of loop: use to iterate on some special data types
for-in loop: same as for of, use to iterate on some special data types, use for object keys
*/

//-----for loop:-------Q1 Make the table of 2
console.log("for loop");


let table = 2

for (let i=0; i <= 10; i++){
    console.log(i * table);
    if(table * i == 10){
        break;
    }
}
//-------for loop:-----Q2 Print Hello world 10 times

let message = "hello world";

for(let i = 0; i < 10; i++){
    console.log(message);
    
}

//----while loop----Q1 Print number 1 to 10 
console.log("While loop");

let i = 0

while(i <= 10){
console.log(i);
i++

}

// ---while loop--- Q2 Print your name 10 times

let myName = 1

while( myName <= 10){
    console.log("shezan");
    myName++
}


// ---DO - WHILE LOOP--- Q1 Q2 Print your name 10 times
console.log("Do-while loop");

let i2 = 1
do {
    console.log("Shezan");
    i2++
    
}while(i2 <= 10);// use semi-colon



// ---For of Loop:--- Q1 print your message that iterates each character in diffrent lines;
console.log("for-of loop");


let messageStr = "Hello World"; // output: each character in diffrent line

for(let char of messageStr){
    console.log(char); // for of is much smarter about iteration , initialization
    
}

// ---for-in loop:---- Q1 Make an object and print key and value of object using for-in loop
console.log("for-in loop");

const student = {
    name: "Shezan",
    age: 20,
    marks: 95,
    isPassed: true
}

for(let key in student){
    console.log(key)
}

//looping Over arrays: Print all elements of an array

let heroes = ["Deadpool", "ironman", "Spider-Man", "Captain America", "Black Panther"]
//for 
for(let i = 0; i < heroes.length; i++){
    console.log(i);// index of array
}

//for of

for(let hero of heroes){
    console.log(hero);// element of array
}
 
let marks = [67,78,54,98,44]

let sum = 0

for(let mark of marks){
    sum += mark // total marks
}

let avg = sum / marks.length

console.log(`Average marks of class is: ${avg}`); // total average of class
