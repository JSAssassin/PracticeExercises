/*

Define a function, myIndexOf, that accepts three arguments:

source (string)
searchValue (string)
startIdx (number) - optional
If the source contains the searchValue, return the index at which the searchValue starts. 
If the searchValue appears more than once in the source, return the index from the first 
occurance of the searchValue. If the searchValue doesn't exist in the source, return -1.

If a startIdx is passed into the function, ignore any instances of the searchValue that 
occur before that index. If no startIdx is provided, start searching from the beginning of the source.

Do not use the built-in .indexOf string method in your answer. Feel free to use it in all 
future workshop problems though!*/



/*function myIndexOf(source, searchValue, startIdx) {
    debugger;

    for (let i = startIdx; i < source.length - searchValue.length; i++) {
        let subString = source.slice(i, i + searchValue.length);
      
        if (subString === searchValue) {
            return i;
        }
    }

    return -1;
}*/

/*function myIndexOf(source, searchValue, startIdx) {
    if(startIdx === undefined) {
        startIdx = 0;
    }

    
    for(let i = startIdx; i < source.length; i++) {

        //h
        for(let j = 0; j < searchValue.length; j++) {

            //n
            debugger;
            let currentLetter = searchValue[j];
            if(source[i + j] !== searchValue[j]) {
                break;
            }

            return i;
        }
    }

    return -1;
}*/

function myIndexOf(source, searchValue, startIdx = 0) {
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
        let currentTerm = source.slice(i, i + searchValue.length);
        if (currentTerm === searchValue) {
            return i;
        }
    }
    return -1;
}
// console.log(myIndexOf('hello', 'l', 3));
console.log(myIndexOf('here and there', 'nowhere', 0));


