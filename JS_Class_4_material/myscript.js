// document.getElementById('header');
header.style.backgroundColor = 'red';

//Events -------> element.addEventLister
var gdiLink = document.getElementById('gdiLink');
gdiLink.addEventListener('click', function(event){
    event.preventDefault();
    alert(' Error Message');
})

function writeResults (result){

    //First, find the empty div where we want to put the answers.
    
    var resultsDiv = document.getElementById('resultsBox');
    
    
    
    
    //Second, create a new paragraph
    
    var newParagraph = document.createElement('p');
    
    
    
    
    //Create a text node, a string of text, to put inside the paragraph.
    
    var paragraphText = document.createTextNode(result);
    
     
    
    //Now, we assemble our results. Put the new text in the new paragraph
    
    newParagraph.appendChild(paragraphText);
}