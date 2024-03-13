
/*
let country = "Kenya";
let continent = "Africa";
let population = 46000000;

console.log(country);
console.log(continent);
console.log(population);


// typeof

let javaScriptIsFun = true;

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 25);
console.log(typeof "Daviv");

//Dynamic typing

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun)

//udefined variables
let year;
console.log(year)
console.log(typeof year)

// null is a data type similar to undefined
console.log(typeof null)


//Ways of declearing variables in javaScript




// variable mutation
let age = 30;
age = 31;

//let
//const
// var

//Operators in javaScript

//Arithmetic operators

const ageNow = 2090;

const ageDavid = ageNow - 1992;
const ageMike = ageNow - 2085;
console.log(ageDavid, ageMike);

console.log(ageDavid * 2, ageDavid / 2, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2*2*2

//Typeof operator

// Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x +10 = 25
x *= 4; // x = x *4 = 100
x++; // x = x+1
x--; // x = x =1
console.log(x);

//comparison operators: used to produce boolean values
console.log(ageDavid > ageMike); //>,<, >=, <=// if yes it will output true and if no, it will output fales
console.log(ageMike >= 18);

//in real world we will store this in a varsable e.g

const isFullAge = ageMike >= 18;



// Operator precedenc
const ageNow = 2090;

const ageDavid = ageNow - 1992;
const ageMike = ageNow - 2085;
console.log(ageDavid, ageMike);

console.log(ageNow - 1992 > ageNow - 2085);

let x, y;

x = y = 25 - 10 - 5; // x = y =10 , x =10
console.log(x, y);

const averageAge = (ageDavid + ageMike) / 2;
console.log(averageAge);

// console.log(ageDavid,ageMike)



//Challange one codes

// Write your code below. Good luck! 🙂 

// Calculating Body Mass Index

let massMark = 78;

let heightMark = 1.69;

let massJohn = 92;

let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);

let BMIJohn = massJohn / (heightJohn * heightJohn);

// BONUS

// let markHigherBMI = true;

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);



//String literals. Template

const firstName = 'David';
const job = 'coder';
const birthYear = 1960;
const yearNow = 2029;

const david = "I'm " + firstName + ', a ' + (yearNow - birthYear)
+ ' years old ' + job +'!'

console.log(david)

const davidNew = `I'm ${firstName}, a ${yearNow - birthYear}, year old ${job}!`
console.log(davidNew)

console.log(`just a regular string`)

// multi line string with literals

console.log(`string with \n\
multiple \n\
lines`);

//with tamplate srings...usful when building html from javascript

console.log(`String 
multiple
lines`) //press enter(return) after typing.

*/



/*
//Decision making 

const age = 15;

//const isOldEnough = age >= 18; // boolean variable declaration
// if controle structure
if(age >= 18){
    console.log(`Hello David you can start driving`)
}else{
    const yearsLeft = 18 - age;
    console.log(`David is too young. Please waint another ${yearsLeft} years :`)
}

//another example of if controle block

const birthDay = 2012;

let century;

if(birthDay <= 2000){
    century = 20;
}else{
    century = 21;
}

console.log(century)

*/




/*

// Type conversion...manually convert from one type to another
// Type coarsion is when javaScript converts for us behind the seen

// Type conversion
const inputYear = '1991'
console.log(Number(inputYear) + 18)

console.log(Number('David'))
console.log(typeof NaN)

console.log(String(45), 23)

// javaScript can only convert to string, number, and boolean 

//type coercion
console.log(`I am ` +  23  + ` years old`)
console.log('23' - '10' - 3)
console.log('23' / '2')


let n = '1' + 1
n = n -1;
console.log(n) 
*/




/*

// Truthy and falsy values.
// falsy values are ones that are not exactly false but will become false if 
//we convert them to boolean e.g 

// 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('David'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;

if(money){
    console.log("Don't spend it all")
}else{
    console.log("You should get a job")
}




let height;
if(height){
    console.log('YAY! Height is defined')
}else{
    console.log ('Height is UNDEFINED')
}

*/




/*
// Equality Operators
 const age = 18;

 //strick euality operator...because does not perform type coercion
 //only return true when both values are exacly the same.
 if(age === 18) console.log('You just become 18 years')

 // == loose equality operator... performs type coecion

 // '18' == 18 true ... converts '18' to number then compares it.

//== can introduce hard to find bags in our code(avoid it)
//better to convert manually than using loose equality operator.


    //GETING A VALUE FROM ANY WEB PAGE

const favoriteNumber = Number(prompt('Enter you favorite number here:'))
 
 console.log(favoriteNumber)



 if(favoriteNumber === 25){
    console.log('Cool 25 is your favorite number')
 } else if(favoriteNumber === 10){
    console.log("7 is also favorite")
 } else if(favoriteNumber === 50){
    console.log('50 is also your favorite number')
 }else{
    console.log(`${favoriteNumber}, is note your favorite number!`)

 }

 //different operator...or not equal
 //sometimes we need difference operator the !===

 */





 /*

 //Boolean logic.... variable that can either be true or false

 // The AND, OR, NOT Operators.

 //NOT operator does not combine values...acts on only one value, it inverts a value, so if a is true it become false

 //Logical Operators

 const hasDriversLincense = true;
 const hasGoodVision = false;

 console.log(hasDriversLincense && hasGoodVision);
 console.log(hasDriversLincense || hasGoodVision);

 console.log(!hasDriversLincense)// logical not

//  if(hasDriversLincense && hasGoodVision){
//     console.log('Dave is able to drive')
//  }else{
//     console.log("Someone else should drive...")
//  }

 const isTired = true;

 console.log(hasDriversLincense && hasGoodVision && isTired)

 if(hasDriversLincense && hasGoodVision && !isTired){
    console.log('Dave is able to drive')
 }else{
    console.log("Someone else should drive...")
 }

*/



/*

//Switch statement. 
//Alternative way of writing complecated if/else statement
//compare one value to  multiple different options.

//  const day = 'wednesday'

//  switch(day){
// case 'monday':
//     console.log('prepare the course structure')
//     break;
// case 'tuesday':
//     console.log('Prepare theory videos')
// case 'wednesday':
// case 'thurday':
//     console.log('write code example')
//     break;
// case 'friday':
//     console.log('Record video')
//     break;
// case 'saturday':
// case 'sunday':
//     console.log('Enjoy the weekend')
// default:
//     console.log('Not a valid day')

//  }

let day = prompt('Enter day')

if(day === 'monday'){
    console.log('Prepare course structure')
}else if(day === 'tuesday'){

}else if(day === 'wednesday' || day === 'thursday'){
    console.log('write code example')
}else if(day === 'friday'){
    console.log('Record videos')
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend')
}else{
    console.log('Not a valid day')
}

*/







/*

// Statements and expressions
 // expression produceses a value e.g. 4 + 3, 234, true, false, !false


*/


/*
//The conditional  (Ternary) operator

const age = 23;

// age >= 18 ? console.log('Drink wine') : console.log('Drink water')

//conditional variable declaration with ternary operator.
const drink = age >= 18 ? 'Wine' : 'Water'
console.log(drink)



let drink2;

if(age >= 18){
    drink2 = 'Wine'
}else {
    drink2 = 'Water'
}

console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'Wine' : 'Water'}`)

*/