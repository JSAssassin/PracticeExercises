/*Define a function, mostVowels, that accepts one argument, a string of words.

mostVowels should return the word that has the most vowels.

mostVowels('I am a keeper with some real rhythms'); // => keeper
If none of the words have any vowels, return an empty string.

mostVowels('try my gym'); // => ''*/

function mostVowels(stringOfWords) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let wordList = stringOfWords.split(/[ ,.]+/);
    console.log(wordList);

    let wordWithMostVowels = "";
    let mostVowelsCount = 0;

    for (let i = 0; i < wordList.length; i++) {
        let currentWord = wordList[i];
        let numOfVowels = 0;

        for (let j = 0; j < vowels.length; j++) {
            let currentVowel = vowels[j];
            numOfVowels = numOfVowels + countLetter(currentWord, currentVowel);
        }
        if (numOfVowels > mostVowelsCount) {
            mostVowelsCount = numOfVowels;
            wordWithMostVowels = currentWord;
        }

    }
    return wordWithMostVowels;
}

// butt t -> 2
function countLetter(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i].toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(mostVowels('Give her hell from us, Peeves.'));