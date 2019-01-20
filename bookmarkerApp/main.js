// listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);

// Save bookmark
function saveBookmark(e) {
  // Get form values
  let siteName = document.getElementById('siteName').value;
  let siteURL = document.getElementById('siteUrl').value;

  if (!(validateForm(siteName, siteURL))) {
    return false;
  }

  let bookmark = {
    name: siteName,
    url: siteURL
  }
  // Init array
  let bookmarks = [];
  // Test if bookmarks is null
  if (localStorage.getItem('bookmarks') === null) {
    // Add to array
    bookmarks.push(bookmark);
    // Set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  // Local storage test
  // localStorage.setItem('test', 'Hello World');
  // console.log(localStorage.getItem('test'));
  // localStorage.removeItem('test'); 
  // Prevent form submission
  document.getElementById('myForm').reset();
  fetchBookmarks();
  e.preventDefault();
} 

function fetchBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  let bookmarksResults = document.getElementById('bookmarksResults');
  bookmarksResults.innerHTML = ''; 
  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
    bookmarksResults.innerHTML += `<div class="alert alert-dark"><h3>${name}<a style="margin-left: 30px"class="btn btn-info" target="_blank" href="${url}">Visit</a><a class="btn btn-danger" href="#" onClick="deleteBookMark('${url}')" style="float: right">Delete</a></h3></div>`;
  }
}  

function deleteBookMark(url) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks(); 
}

// Validate form
function validateForm(siteName, siteURL) {
  if (!siteName || !siteURL) {
    alert("Please fill in the form");
    return false;
  }

  // Check validity of url using regular expressions
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if (!(siteURL.match(regex))) {
    alert("Please type in a valid URL!");
    return false;
  }

  return true;
}