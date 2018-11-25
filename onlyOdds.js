/*Define a function, onlyOdds, that accepts a number as an argument. 
onlyOdds should should return the sum of all the odd numbers between the given number and 1.

If onlyOdds receives an argument less than 1, it should return 0.

onlyOdds(6); // => 9 (5 + 3 + 1)*/




function onlyOdds(number){
let sum = 0;
   for(let i=number; i>0; i--){
    if(i % 2 !== 0){
        sum += i;
    }
   }

   return sum;
}

console.log(onlyOdds(10));
console.log(onlyOdds(6));
console.log(onlyOdds(0));