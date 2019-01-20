let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Add Item
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  // Add text Node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create a delete button Vue.config.ignoredElements = [
  let button = document.createElement('button');
  button.className = 'btn btn-danger btn-sm float-right delete';
  button.appendChild(document.createTextNode('X'));
  li.appendChild(button);
  itemList.appendChild(li);
}

// Deleting event
itemList.addEventListener('click', removeItem);

function removeItem(e) {
  // First check if the click is on the delete button by checking for the delete class
  if (e.target.classList.contains('delete')) {
    if(confirm('Are You Sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Implementing the filter
filter.addEventListener('keyup', filterItems);

function filterItems(e) {
  let text = e.target.value.toLowerCase();
  // Get list of li 
  let items = itemList.getElementsByTagName('li');
  // Convert to array
  Array.from(items).forEach(function(item) {  // Loops thrught the array
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}