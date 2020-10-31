// Numbers
// var number1 = 35;
// var number2 = 40;
// alert('My favorite number is ' + (number1 + number2));

// Array
// var colors = ['red', 'blue', 'green'];

// var colors = new Array('red', 'yellow','orange');
// colors[3]='purple'
// colors.push('green', 'blue', 'pink');
// alert(colors);
// alert(colors.length);

// var numbers = [5, 77, 6, 43, 'seven'];
// alert(numbers.length);
// alert(numbers.sort());

// Loops
// var i;
// I = colors.length;
// y = colors;

//  for(i = 0;i<I; i++);
// console.log(i);

// var numbers = [5, 77, 6, 43, 7, 4];
// numbers.sort();
// for(var i=0; i<numbers.length; i++){
// console.log(numbers[i]);
// };

// var hello = "hello world";
// message = hello;

// alert(hello);
// alert(message)

// numbers.forEach(function(number){
// 	console.log(numbers);
// });

// Conditionals
// var y =1
// IF Statement
if(1 == 2){
	console.log('that is strange');
} else {
	console.log('this is weird');
}

// SWITCH Case

// var fruits = 'pineapple';

// switch(fruits){
// 	case "banana":
// 		alert('i love bananas');
// 		break;
// 	case "pineapple":
// 		alert('Pineapples are great too');
// 		break;
// 	default:
// 		alert('Well, i love fruits generally. so anyone is fine');
// 		break;
// }

// object Literal 
var person = {
	firstname: 'Anthonia',
	lastname: 'Dan',
	Age: 24,
	children: ['Favour', 'Love', 'George', 'Mitchel'],
	address:{
		street: '7 Winston Churchill',
		city: 'Abuja',
		state: 'FCT'
	},
	fullName: function(){
		return this.firstname + " " + this.lastname;
	}
}
// console.log(person.children[0]);

// person.children.forEach(function(children){
// 	console.log(person.children[1]);
// });

console.log(person.address.street);
console.log(person.fullName());

// Object Constructor

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
	return 'This apple has a '+ apple.color + ' color and has a ' 
	+ apple.shape + ' shape';
}

function fruit(name, color, shape){
	this.name = name;
	this.color = color;
	this.shape = shape;

this.describe = function(){
	return 'A '+ this.name + ' has a '+ this.color
	+ ' a ' + this.shape + ' shape';
}

}
var melon = new fruit('watermelon', 'green', 'round');
var pear = new fruit('Avocado pear', 'green', 'oval');
// So this.color can be use in the stead of apple.color and shape too.
console.log(apple.describe());
console.log(melon.describe());
console.log(pear.describe());


var users = [
	{
		name: 'Tonia',
		age: 10,
	},
	{
		name: 'Femi',
		age: 11,
	},
	{
		name: 'Lydia',
		age: 12,
	},
	{
		name: 'Young',
		age: 13,
	},
];
console.log(users[1].age);


doClick = function(){
	alert('Heey Howfar?');
}

function ChangeText(){
	var heading = document.getElementById('heading');
	heading.innerHTML = Date();
}

GoBack = function(){
	var heading =document.getElementById('heading');
	heading.innerHTML = "Learning JavaScript";
}

function changeBackground(p){
 var body = document.getElementById('body');
 body.style.backgroundColor = p.value;
 var heading =document.getElementById('heading');
	heading.innerHTML = "Learning JavaScript";
	heading.style.color = "white";

}

// Validation
validateForm = function(){
	 var firstName = document.forms["myForm"]["firstName"].value;

	 if(firstName == null || firstName == ""){

	 	var blah = document.getElementById('blah');
	 	blah.innerHTML = "first name is required";

	 	return false;
	 }

	 if(firstName.length < 3){

	 	var blah = document.getElementById('blah');
	 	blah.innerHTML = "Please enter more text";

	 	return false;
	 }

	 if(firstName.isNumeric == True){

	 	var blah = document.getElementById('blah');
	 	blah.innerHTML = "Please enter text not numbers";

	 	return false;
	 }
}



