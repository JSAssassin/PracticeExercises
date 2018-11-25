//Function as a value Vs Function Declaration

//Differences


var square = function(n){
    return n * n;
}

console.log(square(2));

console.log(square2(4));

function square2(n){
    return n * n;
}
//No semi-colon required after the function block
/* The preceding code works, even though the function is defined below the 
code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. 
They are conceptually moved to the top of their scope and can be used by all the code in that scope. 
This is sometimes useful because it offers the freedom to order code in a way that 
seems meaningful, without worrying about having to define all functions before they are used.*/
