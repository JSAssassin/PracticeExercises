// function wrapValue(n){
//     let local = n;
//     return () => local
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor){
//     return number => number * factor;
// }

// let twice = multiplier(5);
// console.log(twice(5));
// // Explicit local binding from wrapValue isn't really needed since a parameter is itself a local binding



let getReady = function(n) {
    let myN = n; // n is a copy of whatever you give it
    return function() {
        return myN + 1;
    }
}

let number = 5;
let addOne = getReady(number);
number = 33;
// let addOne = getReady(number);

console.log(addOne()); // result should be 6 because it has a copy of the old value of number