//This is my JS code
alert("Hello Tashi!");

var numberOfPencils = 5;
console.log(numberOfPencils);

// //Using arthemetic operations
var firstNum = 28;
var secondNum = 20;
var addNum = firstNum + secondNum;
var subtractNum = firstNum - secondNum;
var multiplyNum = firstNum * secondNum;
var modulus = firstNum % secondNum;

console.log('add:', addNum, 'subtract:', subtractNum, 'multiply:',multiplyNum, 'modulus:', modulus);

//string concatenation
var kittenFirstName = 'Ori';
var kittenFullName = kittenFirstName + ' Oreo';
console.log(kittenFullName);

var kittensName = 'Ori';
kittensName += ' Oreo';

console.log(kittensName);

var numberOfCats = 2;
var typeOfCats = "long-haired";
var allTheCats = 'I have ' + numberOfCats + ' '+ typeOfCats + ' cats.';

console.log(allTheCats);

var billPreTip = 20;
var percentage = 5/100;
// console.log("--------> Percentage: " + percentage);
// console.log("--------> percentage * bill: " + percentage * billPreTip);
// PEDMAS + BODMAS
// console.log("--------> total: " + ((percentage * billPreTip) + billPreTip));
var tip = (5/100)*billPreTip;

var total = billPreTip + tip;

// var num = "20.09"
// var fl_ = Number.parseFloat(num);

console.log ("The total bill is " + total.toFixed(2)); 
// ---------> look into .toFixed & Number.parseFloat()

//Declare a Function
function parrotFacts(){
    console.log('Some parrots can live for 8 years');
    console.log('Parrots can speak human language');
}

//Invoke a function
parrotFacts();

//Arguments
function callAKitten(kittenName){
    console.log('Hey there, come here little ' + kittenName + '!');
}

callAKitten('Ori');

function addNumbers(a,b){
    console.log(a+b);
}

addNumbers(2,4);
addNumbers(10,12);

//pass variables into functions

function fullName(firstName,lastName){
    return firstName + ' ' + lastName;
}

var name = fullName('Tashi','Dolma');
console.log(name);

// function returning value
function square(num){
    return num*num;
}

console.log(square(4));

var squareOfFive = square(5); // variables holding the function value

//Control Flow
//Conditional Statement
var age = 30;
if(age>18){
    console.log('You\'re an adult');
}

var temp = 0;

if(temp < 50 && temp >30){
    console.log('Wear a coat');
} else if(temp<30 && temp>1){
    console.log('Wear a coat and hat');
} else if(temp<0 || temp===0){
    console.log('Stay inside');
} else{
    console.log("Wear whatever you want.");
}


//Logical Operators

//For Loop

for(var i=1; i<=12; i++){
    console.log('9 X ' + i + ' =', i * 9);
}


//While Loop
// while(condition){
//     // do sth;
// }


//Arrays
var Colors = ['red', 'blue', 'green'];
console.log(Colors.length);

var myFavoriteThings = ['Phone', 1024, 'Brocolli'];
myFavoriteThings[0] = 'Computer';
console.log (myFavoriteThings); 

var favoriteFood = ['banana', 'cake', 'dumplings'];
console.log(favoriteFood[0]);

for(var i=0; i<favoriteFood.length; i++){
    console.log(favoriteFood[i]);
}


//Objects
var objectName = {
    propertyName: propertyValue,
    propertyName: propertyValue,
    propertyName: propertyValue

}

var user = {
    name: 'Tashi',
    hometown: 'Thimphu',
    age: 28
};
//dot notation
console.log(user.hoemtown);
//bracket notation
console.log(user['hometown']);
user.hometown = 'Charlottesville';
console.log(user);

//Arrays of Objects
var users = [
    {name:'Tashi', age: 27},
    {name:'Ori', age:27}
]

for(var i=0; i<users.length; i++){
    var user = users[i];
    console.log(user.name + ' is ' + user.age + ' years old');
}

function userDescriptor(user){
    console.log('Name is ' + user.name);
    console.log('Her age is ' + user.age);
}

userDescriptor(user);

var favoriteReceipe = {
    name: 'Tashi',
    title: 'Momos',
    servings: 3,
    ingredients: ['flour', 'minced meat', 'onions', 'oil'],
    directions: ['Make Dough', 'Make fillings', 'steam the dumplings'],
    letsCook: function(){
        console.log('I am hungry! Let\'s Cook', this.title);
    }
}

var myReceipe = {
    name: 'Steph',
    title: 'Pudding',
    servings: 6,
    ingredients: ['chocolate', 'cookies', 'milk', 'flour'],
    directions: ['Mix Dough', 'Add milk', 'Make pudding'],
    letsCook: function(){
        console.log('I am hungry! Let\'s Cook', this.title);
    }
}

function AllReceipe(receipe){
    console.log('This is ' + receipe.name + '\'s Receipe ' + receipe.title);
    console.log("This are the ingredients:");
    for(var i=0; i<receipe.ingredients.length;i++){
        console.log(receipe.ingredients[i]);
    }
    receipe.letsCook();

}

AllReceipe(favoriteReceipe);
AllReceipe(myReceipe);


console.log('number is:', 5);
console.log('number is:' + ' ' + 5);

/*string methods - action performed on values
to call a method - 
<value>. <method name>(<arg, if any>)*/

console.log('string'.toUpperCase);

let theNumber = Number(prompt("Pick a number"));
// console.log("Squareroot of your number is", theNumber * theNumber);
var isNotANumber = Number.isNaN(theNumber);
if(!isNotANumber){
    console.log("Squareroot of your number is", theNumber * theNumber);
}else{
    console.log("Hey! Why didn't you give me a number?");

let count =0;
while(count<=12){
    console.log(count);
    count = count + 2;
}

let result = 1;
let count = 0;
while(count<=10){
    result = result * 2;
    count++;
}

console.log(result);

let yourName;
do{
    yourName = prompt("Who are you?");
} while(!yourName);

console.log(yourName);
let x = '4';
switch(x){
    case '4':
    console.log("This is ", 1);
    case 5:
    console.log("This is", 2);
    break;
    default:
    console.log("This is default");
    break;

}



