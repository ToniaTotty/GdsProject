var person = 'instructor';

console.log(person);
person = 'teacher';
console.log(person);
var firstName = 'John',
	lastName = 'Doe',
	age = 27;

//DATA TYPES
//string
var str = 'John is an instructor';
console.log(str);

//num
var num = 27.23;
console.log(num);

//boolean
var num1 = 5;
var num2 = 10;

//undefined
var a;
console.log(a);

//null
var a = null;

//OPERATORS
var a = 5+5;
console.log(a)

//COMPARISON OPERATORS

var a = 5;
var b = 5;

//TYPE COERSION

var c = 5 + 'b' + 10;
console.log(c);

// CONDITIONAL STATEMENT
// IF....ELSE...
var myChild = 'Alexis';
var gender = 'female';

if (gender === 'male'){
	console.log(myChild + ' is my son');
}else{
	console.log(myChild + ' is my daughter');
}