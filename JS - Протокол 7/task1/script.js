var fruitsList = new array("Orange" , "Apple", "Kiwi", "Cherry");
var newParagraph = document.createElement("p");
var newText = document.createTextNode("List of Fruits: " + fruitsList);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);

var newfruitsList = newfruitsList.slice(1,3);
var newParagraph = document.createElement("p");
var newText = document.createTextNode("Extracts List of Fruits: " + newfruitsList);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);