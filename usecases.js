// Javascript usecases

// 1. access div element by id

// 1.1 access div element with id: div1 and then change/replace the text in that div

//access div element with id: div1 and store in variable
const element1 = document.getElementById("div1");
// returns the selected element <div id=div1>...</div> in the variable element1

//use element1's inner HTML to change/replace with new text in that element
element1.innerHTML = "div1 is accessed and text in div 1 is replaced";

// 1.2 access div element with id: div2 and then add/append text to the text already present in div2

// access div element with id: div2 and store in variable
const element2 = document.getElementById("div2");
// returns the selected element <div id=div2>...</div> in the variable element1

//use element2's inner HTML to add/append new text to the text in that element
element2.innerHTML += "div2 is accessed and new text is appended to the element";

// 1.3 check difference between InnerHTML, innerText and textContext on console
const element3 = document.getElementById("div3");

// print innerHTML content
console.log(element3.innerHTML);
// reads and returns both the HTML markup and the text content of the elements
// displays text from the element

// print innerText content
console.log(element3.innerText);
// reads and returns only text as it appears on the screen in the element
// It ignores HTML tags
// does not include text that is hidden with CSS styles
// When you need to account for styles, you should consider using innerText.

// print textContent content
console.log(element3.textContent);
// reads and returns text only as it appears in the html element regardless of whether
// it is rendered on the screen or not
// It ignores HTML tags
// In situations where performance is a concern and
// you don't need to account for styles,
// textContent might be a more efficient choice compared to innerText


// Testing and debugging tools/functions
// console.log()
// window.alert() or alert()
// document.write()

//console.log("abc");

//window.alert("hey this an alert!");
//alert("this is also an alert!!");

//document.write(4+6);
//print output on document after all the html tags
//will print in the end no matter where it is mentioned in .js file
//only used for testing purposes

// to print the content of the current window with printer
// window.print();




// 7. Create new Element and Set its attribute values of the new element

// 7.1 Create element
const newElement7 = document.createElement("div");

// Set attribute "id" of newly created div
newElement7.setAttribute("id", "div70");

//add some css style (background color) to the newly created div element so the text shows up on screen
newElement7.style.color = "green";

//add newly created div element to parent element with id: div7
const parentElement7 = document.getElementById("div7");
parentElement7.appendChild(newElement7); // append div70 as child element to parent element div7

// Access new created div element by id and set some text into it
document.getElementById("div70").innerHTML = "New 'div' element created and text is added into it";

