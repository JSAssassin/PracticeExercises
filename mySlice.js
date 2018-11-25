/* Write a function mySlice that accepts up to three arguments:

originalString (string)
startIdx (number, optional)
endIdx (number, optional)
mySlice should return a string. The returned string should be a copy of the original string. 
If the user defines a startIdx, the returned string should start at that index:
mySlice('slice and dice', 2)    // => ice and dice

If the user defined an endIdx, the returned string should end at the last index before the endIdx:
mySlice('slice and dice', 2, 5)    // => ice

If the user doesn't define either the startIdx or the endIdx, return the entire originalString:
mySlice('slice and dice')    // => slice and dice

You can assume the startIdx will always be less than or equal to the endIdx.

Do not use the built in .slice string method. Feel free to use it in all future workshop problems, though!*/



function mySlice(originalString, startIdx, endIdx) {
    let result = '';
    if (startIdx === undefined){
        startIdx = 0;
    }
    if(endIdx === undefined){
        endIdx = originalString.length;
    }
    for (let i = startIdx; i < endIdx; i++) {
        // console.log(`i: ${i}, letter: ${originalString[i]}`)
        result += originalString[i];
    }

    return result;
}

console.log(mySlice('a piece of pie', 2, )); // piece of pie
console.log(mySlice('a piece of pie', 2, 7));
console.log(mySlice('a piece of cake'));