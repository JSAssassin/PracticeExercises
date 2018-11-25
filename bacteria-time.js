/* Define a function, bacteriaTime, that accepts two arguments:

currentNum (num) - number of starting bacteria
targetNum (num) - desired number of bacteria
Assuming that the number of bacteria double every 20 minutes, bacteriaTime
 should return the number of minutes required for the number of bacteria to 
 grow from the currentNum to a number equal to or larger than the targetNum.

You can assume the currentNum will be a positive integer. If the targetNum 
is smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.*/





function bacteriaTime(currentNum, targetNum) {
    let totalTimeInMinutes = 0;
    if (currentNum >= targetNum) {
        totalTimeInMinutes = 'targetNum must be larger than currentNum';
    } else {
        while (currentNum < targetNum) {
            currentNum *= 2;
            totalTimeInMinutes += 20;
        }
    }
    return totalTimeInMinutes;
}

console.log(bacteriaTime(1, 8));