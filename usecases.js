// Javascript Use Cases

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
// In situations where performance is a concern, and
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



/* 3. Declaring variables
// When to Use var, let, or const?
1. Always declare variables before using them

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

6. 'let' and 'const' have block scope(ES6) eg:

{
    let x = 2; // variable x is declared inside this block {}
}
// x cannot be used here


7. variables declares with 'var' keyword have global scope (only used for old browsers before es6)
// can be redeclared many times. latest value of variable will be the previously assigned value
{
    var x = 2;
}
// x can be used here


What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

**let and const does not bind to this.

**let and const are not hoisted.

What is Not Good?
var does not have to be declared.

**var is hoisted.

**var binds to this.

When to use JavaScript const?

**It does not define a constant value. It defines a constant reference to a value.**
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp


*/


// JavaScript objects can be converted to a string use JSON.stringify()

const obj1 = {
    first_name : "Lionel",
    last_name : "Messi",
    club : "Inter Miami",
    age : 37
};

document.getElementById("div8").innerHTML = JSON.stringify(obj1);

let text1 = "";

for(let prop in obj1){
    text1 += obj1[prop] + " ";
}

//document.getElementById("div8").innerHTML = text1;

// Constructor in javascript is function to create many objects of the same type

function Obj2(f_name,l_name,cty) {
    this.first_name = f_name; // first name of this object will be what passed to function from f_name
    this.last_name = l_name; // last name of this object will be what passed to function from f_name
    this.city = cty; // city of this object will be what passed to function from cty
    this.fullName = function() {
        return this.first_name + " " + this.last_name;
    };
}

const man1 = new Obj2("Lionel","Messi","Miami");
const man2 = new Obj2("Cristino","Ronaldo","Lisbon");

//document.getElementById("div9").innerHTML = JSON.stringify(man1);
document.getElementById("div9").innerHTML = JSON.stringify(man2);


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


// Events in Javascript

function eventClick(){
    let str1 = document.getElementById("p1").innerHTML;
    str1 += " " + "You clicked the onclick button!!";
    document.getElementById("p1").innerHTML = str1;
    document.getElementById("button1").disabled = true;
}

function eventMouseOver(){
    document.getElementById("p2").innerHTML = "New Text";
    document.getElementById("p2").style.color = "purple";
}

function eveMouseOver(){
    document.getElementById("p3").innerHTML = "Text with mouse on the button";
    document.getElementById("p3").style.color = "green";
}

function eventMouseOut(){
    document.getElementById("p3").innerHTML = "Text with mouse out of the button";
    document.getElementById("p3").style.color = "blue";
}

function eventChange(){
    let str2 = document.getElementById("mySelect").value;
    document.getElementById("p4").innerHTML= str2;
}

function pageRefresh(){
    location.reload();
    //alert("page refreshed");
}

//Looping in Arrays using for/of loop
const arr1 = ["messi", "ronaldo", "neymar", "bruno"];

let str3 = "";
for(let x of arr1){
    str3 += " " + x;
}
document.getElementById("div11").innerHTML = str3;

const arr_of_fruits = ["apple", "mango", "grapes", "banana"];
document.getElementById("div12").innerHTML = arr_of_fruits.length;
document.getElementById("div13").innerHTML = arr_of_fruits.toString();

let fruit_select = arr_of_fruits.pop();
document.getElementById("div14").innerHTML = fruit_select;

arr_of_fruits.push("kiwi");
document.getElementById("div15").innerHTML = arr_of_fruits.toString();

// array.at(i) will give you arr[i+1]
document.getElementById("div16").innerHTML =
    arr_of_fruits.at(2) +
    " " +
    arr_of_fruits.at(3) +
    " " +
    arr_of_fruits.at(-1);

//Array Shift unshift

let shifted_element1 = arr_of_fruits.shift();
document.getElementById("div18").innerHTML = arr_of_fruits.join("*")
document.getElementById("div19").innerHTML = shifted_element1;
document.getElementById("div20").innerHTML = arr_of_fruits.at(0);

arr_of_fruits.unshift("strawberry")

document.getElementById("div21").innerHTML = arr_of_fruits.at(0);
document.getElementById("div22").innerHTML = arr_of_fruits.toString();

//array concatenation
const arr5 = ["snow","ball"];
const arr6 = ["during","christmas"];
const arr7 = arr5.concat(arr6);

document.getElementById("div23").innerHTML = arr7.toString();

const arr8 = arr7.concat("of","05");
document.getElementById("div24").innerHTML = arr8.toString();

arr8.copyWithin(2,0,2);
document.getElementById("div25").innerHTML = arr8.toString();

// Slice - delete from arrays - creates new array
const arr9 = ["last","christmas","Everyone","enjoyed"];
document.getElementById("div26").innerHTML = arr9.join("*");
arr10 = arr9.slice(2);
document.getElementById("div27").innerHTML = arr10.join("*");

// splice - add or remove elements
const arr11 = ["lionel","messi","is","the","best","player"];
document.getElementById("div28").innerHTML = arr11.join("*");
arr11.splice(1,2);
document.getElementById("div29").innerHTML = arr11.toString();

/*
function eventOnLoad(){
    alert("onload element is on the page now")
    setTimeout(eventOnLoad, 3000);
}

function editTask(index) {
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskText = taskList[index];
  const updatedTaskText = prompt('Edit task:', taskText);

  if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
  }
}

function editTask(index) {
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskText = taskList[index];
  const updatedTaskText = prompt('Edit task:', taskText);

  if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
    if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
  }
  if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
    if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
  }
   if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
    if (updatedTaskText !== null) {
    taskList[index] = updatedTaskText;
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks();
  }

}

*/