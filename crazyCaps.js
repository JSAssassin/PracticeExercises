/* Define a function, crazyCaps, that accepts a string as an argument. 
crazyCaps should return a string in which every other character is capitalized. 
The first letter should be lower-cased.*/


function crazyCaps(a) {
  let result = "";
  for(let i=0; i<a.length; i++){
      if(i % 2 === 0){
        result += a[i].toLowerCase();
      } else {
        result += a[i].toUpperCase();
      }
  }

  return result;
}

console.log(crazyCaps("TASHI"));