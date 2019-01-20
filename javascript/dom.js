// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// Change the title from here
// document.title = "My new Title";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);  // Not the best way to select stuff
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);

// Get element by id
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// innerText takes into account styling
// headerTitle.innerText = "GoodBye";
// headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = 'solid 3px #000';

// Add a top border to the header
// let mainHeader = document.getElementById("main-header");
// mainHeader.style.borderBottom = 'solid 5px #000';

// GET ELEMENT BY CLASSNAME
// getEmlementsByTag works the same way as getElemenstsByClassName

/*
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
}

// QUERY SELECTOR
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px #666';
let input = document.querySelector('input');
input.value = 'HelloWorld'
let submit = document.querySelector('input[type="submit"]');
submit.value = 'send';
submit.style.fontWeight = 'bold';
submit.style.paddingLeft = '20px';
submit.style.paddingRight = '20px';

let item = document.querySelector('.list-group-item');
item.style.color = 'red';

let lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERY SELECTOR ALL -> Returns a nodeList that we can run array functions on
let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#444';
}
*/

// TRAVERSING THE DOM //
// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.previousElementSibling.previousElementSibling);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// CHILD NODES
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// First child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='Jello 1';

// Last child
// console.log(itemList.lastElementChild);

// CREATING ELEMENTS
/*
let newDiv = document.createElement('div');
// add class to element
newDiv.className = 'Hello';
// add id to element
newDiv.id = 'hello1';
// Add attribute
newDiv.setAttribute('title', 'Hello Div');
// Create text Node
let newDivText = document.createTextNode('Hello World');
// add textNode to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';
newDiv.style.fontWeight = 'bold';
console.log(newDiv);
*/

// EVENTS

//let button = document.getElementById('button').addEventListener('click', buttonClick);

//function buttonClick(e) {
  // console.log('Button Clicked');
  // console.log(e.target);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX); Gives values relative to the object
  // console.log(e.offsetY);
  // console.log(e.altKey);
  // console.log(e.shiftKey);
  // console.log(e.ctrlKey);
// }

// let button = document.querySelector('#button');
// let select = document.querySelector('select');
// select.addEventListener('change', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseenter', runEvent);
// button.addEventListener('mouseleave', runEvent);
// button.addEventListener('mouseover', runEvent);
// button.addEventListener('mouseout', runEvent);
// button.addEventListener('mousemove', runEvent);
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${ e.type }`);
//  console.log(e.target.value);
//  e.preventDefault();
  
  // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>`;
// }

// let input = document.querySelector('input[type="text');
// let form = document.querySelector('form');
// form.addEventListener('submit', runEvent);
// input.addEventListener('keydown', runEvent);
// input.addEventListener('focus', runEvent);
// input.addEventListener('blur', runEvent);
// input.addEventListener('cut', runEvent);
// input.addEventListener('paste', runEvent);

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add Item function
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('item');
  // Create new li element
  let li = document.createElement('li');
  li.className = 'list-group-item';
  console.log(1);
}