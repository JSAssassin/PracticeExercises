/*LOOPING A TRIANGLE
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it. */

for(let i=1; i<=7; i++){
    var result = '';
    for(let j=0;j<i;j++){
        result += '#';
    }
    console.log(result);

}
// 1 #
// 2 ##
// 3 ###
// n ###...