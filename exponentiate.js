
/* Write a function exponentiate that accepts two arguments:

base (number)
power (number)
exponentiate should return the result of raising the base by the power. 
Assume the power argument will always be an integer greater than or equal to zero. 
Don't forget that any number raised to the 0th power is equal to 1!

Do not use the built-in Math.pow() method, but feel free to use it moving forward!*/





function exponentiate(base, power){
    let result = 1;
    for(let i=1; i<=power; i++){
        result *= base;
    }
    return result
}




// alternate solutions

function exponentiate(base, power) {
    if (power === 0) {
      return 1;
    }
  
    let result = base;
  
    while (power > 1) {
      result *= base;
      power--;
    }
    return result;
  }


function exponentiate(base,power){
    return base ** power;
}

console.log(exponentiate(4,0));
console.log(exponentiate(2,4));