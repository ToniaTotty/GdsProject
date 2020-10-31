// Type Coercion


// CONDITIONAL STATEMENTS

// If...Else If....
var prof = 'composer';

if (prof === 'instructor') {
    console.log (prof + ' teaches students');

} else if (prof === 'doctor'){
    console.log (prof + ' treats people');

} else if (prof === 'composer') {
    console.log (prof + ' creates the music');

} else {
    console.log('professions do not match');
}

// If....Else

if (5 === 5 && 4 === 4) {
    console.log('condition is true');

} else {
    console.log('condition is false');
}
// CODING TASK ON IF....ELSE IF...

var John = 87,
    Nick = 13,
    score = 51

if (John >= score && Nick >= score) {
    console.log("Both students passed the exams");
} else if (John >= score || Nick >= score) {
    console.log("One of the students passed");
 if (John < Nick) {
    console.log("And it is Nick with " + Nick + " points");
} else {
    console.log("And it is John with " + John + " points");
}
}else {
    console.log("Both students failed the exams")
}
// END OF IF .... ELSE STATEMENT


// WORKING WITH FUNCTIONS

function passExam(name, score){
    var passUni = 71;
    var passColl = 51;

    if (score >= passUni){
        console.log(name + ' has enrolled in university with ' + score + ' points');
    } else if (score >= passColl){
        console.log(name + ' has enrolled in college with ' + score + ' points');
    } else {
        console.log(name + ' has failed');
    }
}

function calcScore(quizScore, essayScore){
    var score = quizScore + essayScore;

    return score;
}

passExam('John', calcScore(30, 50));

// END OF FUNCTIONS

// WORKING WITH ARRAYS
var arr = [
    'John',
    'Bob', 
    'Mary', 
    10, 
    true, 
    [1, 2, 3], 
    function(name) {

    return 'Hello ' + name;
}];

console.log(arr[6](arr[0]));

var colors = ['white', 'black', 'red', 'gray'];
colors [3] = 'burgundy';
colors.push('blue', 'purple', 'yellow');    // Adds items to the end of an array
colors.pop();   // Removes items from the end of an array
colors.shift(); // Removes item to the beginning of an array
colors.unshift('green'); // Adds item to the beginning of an array 
colors.shift();
console.log (colors);
console.log(colors.indexOf('purple'));//displays the index of a particular array
                                     // item. usually returns -1 if item isn't found

if(colors.indexOf('green') === -1){
    colors.push('green');
    console.log(colors);
}

var person = new Object();
var job = 'profession';
var name = 'FirstName';

person.name = 'John';
person['LastName'] = 'Doe';
person.son = new Object();
person.son.name = 'Nick';
person.son.age = 5;


console.log(person);
console.log(person.name);
console.log(person['LastName']);
console.log(person.son.name);

// Object Part 2

var person = {
    firstname: 'Bob',
    lastname: 'Smith',
    age: 27,
    daughter: {
        name: 'Mary',
        age: '3'
    },
    myFunc: function(par)
    {
        console.log(par.daughterName + ' is a daughter of '
        + par.fatherName + ' and she is ' + par.daughterAge + 
        ' years old');
    }
};

console.log(person);
console.log(person.daughter.name);

// person.myFunc(person.daughter.name, 
//     person.firstname, person.daughter.age);

person.myFunc({daughterName: 'Jessica', fatherName: 'Micheal', 
daughterAge: 5});

var arr =['John', 'Nick', 'Bob', 'Michael', 'Mary'];
// END OF ARRAYS

// LOOPS

// For Loop
for(var i = 0; i < arr.length; i++){
    if (arr[i] === 'Bob'){

        console.log(arr[i] + ' is my brother');
        continue;
    }
    console.log(arr[i])
}

// WHILE LOOPS
var i = 0;

while(i <= 10){
    
    i++;
    console.log(i);
}

var colors = ['white', 'red', 'green', 'blue'];
var i = 0;
// while (i < colors.length){
    while (i < colors.length){
    i++;
    console.log(colors[i]);  
}
// Do While loop

var colors = ['white', 'red', 'green', 'blue'];
var i = 0;
do {
    console.log(colors[i]);
    i++;
} while(i < colors.length);

// Dates

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

console.log(date);
console.log(year);
console.log(month);

// Coding Task 2

var STUDENTS = [ 
{ 
    name:'John',
    score1: 47,
    score2: 46

},
{ 
    name:'Bob',
    score1: 23,
    score2: 24
},
{ 
    name:'Nick',
    score1: 40,
    score2: 35 

},
{ 
    name:'Alex',
    score1: 44,
    score2: 45
},
];
var degrees = ['A', 'B', 'C', 'D', 'E'];
var passingLimits  = [91, 81, 71, 61, 51];

function TotalScore(score1, score2){
    var AddScores = score1 + score2;
    
    return AddScores;
}

function finalScore(){
    for (var i = 0; i < STUDENTS.length; i++){
        STUDENTS[i].sum = TotalScore(STUDENTS[i].score1,
            STUDENTS[i].score2);

        if(STUDENTS[i].sum >= 51){
            console.log(STUDENTS[i].name + ' passed final exam successfully');

            for (var x = 0; x < passingLimits.length; x++){
                if (STUDENTS[i].sum >= passingLimits[x]){
                    console.log('He has ' + STUDENTS[i].sum + 
                        ' points and he got diploma with degree ' + degrees[x]);
                    console.log('------------');
                    break;


                } 

            }
            
        } else {
                    console.log(STUDENTS[i].name + ' got ' + STUDENTS[i].sum + 
                     ' has failed final exam and has to come back next year');

                    console.log('------------');
        }
    }
    
}

finalScore();

// Chapter 2- Execution context and Execution stack
// function a(){
//     var name = 'John';
//     b();
//     console.log(name);
// }
// function b(){
//     var name = 'Bob';
//     c();
//     console.log(name);
// }
// function c(){
//     var name = 'Nick';
//     console.log(name);
// }

// a();

// Scope and scope chain

// var num1 = 5;
// function a(){
//     var num2 = 10;

//     function b(){
//         var num3 = 15;

//         console.log(num3 + num2 + num1);
//     }
//     b();
// }
// a();

// Hoisting
// console.log(a);
// console.log(b());

// var a = 10;

// function b() {
//     return 20;
// }

// This
// function a() {
//     console.log(this);
//     console.log(this === window);

//     function b(){
//         console.log(this);
//         console.log(this === window);
//     }
//     b();
// }
// a();

// var firstname = "Tonia";

var per = {
    firstname: "John",
    lastname: "smith",
    getFullname: function() {
        var that = this;
        // console.log(this === per);
        console.log (this.firstname + ' ' + 
        this.lastname);

        function greet(){
            console.log('Hi ' + that.firstname);
        }
            greet();
    } 
};


// Borrowing getFullname() method from per object

// var per1 = {
//     firstname: 'Nick',
//     lastname: 'Doe',
// };
// per1.getFullname = per.getFullname;

// per.getFullname();
// per1.getFullname();

// Part 2 of this Video

// Object.Create ()

var obj1 = Object.create(Object.prototype, {
    name: {
        value: 'John'
    }
});
// obj1.name = 'John';
console.log(obj1);

function Person(){
    this.name = 'John';
}

Person.prototype.greet = 'Hello';
var person1 = new Person();




