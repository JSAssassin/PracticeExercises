//The Call Stack

/*function greet(someone){
    console.log("Hello", someone);
}

greet('Tashi');
console.log("Bye");*/

// function chicken(){
//     return egg();
// }
//  function egg(){
//     return chicken();
// }

// console.log(chicken() + " came first!"); --------> returns an error, (Max call stack size exceeded)


function first() {
    second();
}

function second() {
    third();
}

function third() {
    fourth();
}

function fourth() {
    fifth();
    console.log("I'm #4");
}

first();
