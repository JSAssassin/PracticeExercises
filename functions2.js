

//Declaration Notation

/*Shorter way of creating a function binding */
console.log("The square of the number 4 is:",square(4));

function square(x){
    return x * x;
}

//easy to write down and doesn't require a semi-colon after the function
/*preceding code works even though function is defined below the code that uses it. (function 
declarations are not part of the regular top-to-bottom flow of control)*/

//Arrow Functions

const power = (base,exponent)=>{
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log('two power five is',power(2,5));
/* Note: when there is only parameter name  then the parenthesis around the parameter list can be omitted,
and if the body is a single expression, rather than the block in braces, expression can be returned from the function.
*/

//Example

const square1 = (x) => {return x * x;};
const square2 = x => x * x;

console.log(square1(2));
console.log(square2(5));
// When an arrow function has no parameters at all, its parameters list is just an empty set of paranthesis
const horn = () => console.log('toot');
horn();


//OPTIONAL ARGUMENTS
function square(x){
    return x * x;
}
console.log(square(4, true, 'hedgehog'));// Ignores extra arguments becuse Js is extremely broad-minded
// downside ----> even if you pass wrong argument, no error will be shown
//upside -----> function can be called with different numbers of arguments

function minus(a,b){
    if (b=== undefined) return -a;
    else return a - b;
}

console.log(minus(10));
console.log(minus(20,10));

/* If = is used after a parameter, followed by an expression; the value of that expression 
will replace the argument when it is not given.*/

function power2(base, exponent = 2){
    let result = 1;
    for(let i=0; i<exponent; i++){
        result *= base;
    }

    return result;
}

console.log(power2(4));// takes exponent as 2
console.log(power2(2,6));// takes exponent as 6





