// Walking the DOM
document.documentElement //<html>
document.body //body
document.head //head

//child nodes elements that are direct children
//descendants all elements that are nested in the given one including children and their children
//childNode collection lists all child nodes
//firstChild and lastChild give fast access to the first and last child
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

//child nodes is a collection thus we use for..of to iterate of it but array ethods dont work
for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}
//sibling properties
//nextSibling and previousSibling
alert(document.head.nextSibling) //body
alert(document.body.previousSibling) //head

// returns all elements that match the parameter
let elements = document.querySelectorAll('ul > li:last-child')

//returns the first element that matches
let elem = document.querySelector('ul');
//.matches checks if the element matches the given selector and returns true or false
elem.matches('css');

//closest checks the nearest ancestor that matches the css selector
elem.closest('css');

//getElemtn
getElementsByTagName
getElementByClassName
getElementById