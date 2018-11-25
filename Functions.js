const square = function(x){
    return x * x;
};

console.log(square(12));

const makeNoise = function(){
    console.log('Pling!');
}

makeNoise();

const power = function(base,exponent){
    let result = 1;
    for(let i=0; i<exponent; i++){
        result *= base;
    }
    return result;
};

console.log(power(2,10));

/*Binding var, let, const = sth; has scope. 
Scope is the part of the program in which the binding is visible.
For bindings defined outside of any function or block, the scope is the whole
program - we can refer to such bindings wherever you want, it's called global.

Bindings created for a function parameter or declared inside a function can 
be referenced only in that function, so they are called local.

Bindings created with let and const are local to the block that they are declared in
so if you create it inside of a loop, code before and after cannot 'see' it.
Bindings created by old style var keyword, is visible throughout the whole function 
that they appear in- or throughout the global scope, if they are not in a function.
*/

//Examples

let x = 10; // this is global so, it's accessible from anywhere
if (true) {
    let y = 20; // local
    var z = 30; // global because 'var' is accessible throughout the function
    console.log(x + y + z);
}

// console.log(x + y + z); y is not visible here because let is local to if block so will give error y is not defined
console.log(x+z);

let n = 10;
const halve = function(n){
    return n/2;
}

console.log(halve(100));// here multiple bindings have same name, code inside the halve function refers to its own n, not the global n
console.log (n); // here it will refer to the global n


//Nested Scope

//block functions created inside other block functions produces multiple degrees of locality.

const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;

        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
        console.log("------>", ingredientAmount);
console.log(unit);


    }

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, 'cup', 'tahini');
    ingredient(0.25, 'cup', 'lemon juice');
    ingredient(1, 'clove', 'garlic');
    ingredient(2, 'tablespoon', 'olive oil');
    ingredient(0.5, 'teaspoon', 'cumin');
};
hummus(2)
// console.log(ingredientAmount);
