// var myFavoriteColor = 'blue';
// alert(myFavoriteColor);


// JAVASCRIPT ARITHMETIC OPERATORS

/*Operator	Description
+			Addition
-			Subtraction
*			Multiplication
/			Division
%			Modulus
++			Increment
--			Decrement*/

// ASSIGNMENT OPERATORS

// Operator	Example		Same As
// =			x = y		x = y
// +=			x += y		x = x + y
// -=			x -= y		x = x - y
// *=			x *= y		x = x * y
// /=			x /= y		x = x / y
// %=			x %= y		x = x % y

//JAVASCRIPT COMPARISON AND LOGICAL OPERATORS

/*Operator		Description
==				equal to
===				equal value and equal type(strict mode)
!=				not equal
!==				not equal value or not equal type
>				greater than
<				less than
>=				greater than or equal to
<=				less than or equal to
?				ternary operator */

// STRING METHODS

/*Method								Description

charAt()					Returns the character at the specified index (position)
charCodeAt()				Returns the Unicode of the character at the specified index
concat()					Joins two or more strings, and returns a copy of the joined strings
fromCharCode()				Converts Unicode values to characters
indexOf()					Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()				Returns the position of the last found occurrence of a specified value in a string
localeCompare()				Compares two strings in the current locale
match()						Searches a string for a match against a regular expression, and returns the matches
replace()					Searches a string for a value and returns a new string with the value replaced
search()					Searches a string for a value and returns the position of the match
slice()						Extracts a part of a string and returns a new string
split()						Splits a string into an array of substrings
substr()					Extracts a part of a string from a start position through a number of characters
substring()					Extracts a part of a string between two specified positions
toLocaleLowerCase()			Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()			Converts a string to uppercase letters, according to the host's locale
toLowerCase()				Converts a string to lowercase letters
toString()					Returns the value of a String object
toUpperCase()				Converts a string to uppercase letters
trim()						Removes whitespace from both ends of a string
valueOf()					Returns the primitive value of a String object */

//PIGLATIN 
// If the word starts with a vowel, just add 'ay' to the last letter
// If the word doesn't starts with a vowel, remove the consonant, add it to the last letter and add 'ay'

var defaultWord = 'ice';
var vowels = 'aeiou';
var firstLetter = defaultWord[0];
var piglatin = '';
var remWords = defaultWord.slice(1);

if(vowels.indexOf(firstLetter) != -1){
	console.log(defaultWord + 'ay');
}else{
	console.log(remWords + firstLetter + 'ay');
}

var color = 'red';
var color = 'green';
console.log(color);

var x = 'hello ';
var y = 20
var z = x + y;
console.log(z);

var sayIt = 'he said "go home"';
console.log(sayIt);

function locateIt(){
	var get = document.getElementById('try').innerHTML;
	var get1 = get.indexOf('locate');
	var get2 = document.getElementById('p1').innerHTML = get1;
}

var fruits = 'apple, grape, banana';
var sliceIt = fruits.toUpperCase();
console.log(sliceIt);


var a = 8;

switch(a){
	case 1:
		console.log('Hello, i am 1');
		break;
	case 2:
		console.log('Hello, i am 2');
		break;
	case 3:
		console.log('Hello, i am 3');
		break;
		default: 
		console.log('the number you entered has no case on this switch');
}

// var day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case  6:
//         day = "Saturday";
//         break;
// }
// document.getElementById("demo").innerHTML = "Today is " + day;

// FUNCTION

// SYNTAX
// function functionName(par){
// 	// code to execute
// }

// functionName(arg);

// ASSIGNMENT


var Uniscore = 71;
var Colscore = 51;

function passExam(name, score){
	if (score >= Uniscore){
		console.log(name + ' you have gained admission into the university, \
with ' + score + ' marks');
	} else if(score >= Colscore){
		console.log(name + ' you have gained admission into the college, \
with ' + score + ' marks');
	} else {
		console.log("Sorry " + name + " you didn't make it to any of the schools, \
try again next year!")
	}
}

passExam('Peter', 70);
passExam('Luke', 71);
passExam('Daniel', 50);

function richTechGuys(firstname, lastname){
	console.log('hello ' + arguments[0] + arguments[1]);
}
richTechGuys('Bill', ' Gates');
richTechGuys('Jeff', ' Bezos');
richTechGuys('Mark', ' Zuckerberg');


// function add (a,b){
// 	console.log(a + b);
// }
// add(5, 10);

// try
// {
//     var result  =  Sum(10, 20);
// }
// catch(ex)
// {
//     console.log(ex);
// }

// function Sum(a,b){
// 	return (a + b);
// }
// console.log(result)

// var a = 5;
// alert('i have ' + a + ' mangoes')

function changeDate(){
	var x = document.getElementById('heading');
	x.innerHTML = Date();
}

function changeBackground(g){
	document.getElementById('body').style.backgroundColor = g.value;
}
// Better way
// var bgChange = document.getElementById('background');
// bgChange.onchange = function changeBackground(g){
// 	document.getElementById('body').style.backgroundColor = this.value;
// }

// document.getElementById('tonia').innerHTML = ' The former paragraph is changed';

var mySal = 500;
var yourSal = prompt('enter your salary');;

if( mySal > yourSal)
{
    alert("My Salary is greater than your salary");
}
else
{
    alert("My Salary is less than your salary");
}

// document.createElement(h4) = 'hello';

function reverse_a_number(n)
{
	let x = n.toString();
	return x.split("").reverse().join("");
}
document.write(reverse_a_number(32243));