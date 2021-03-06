// Book Constructor
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Constructor
class UI {
  constructor() {}

  addBookToList(book) {
    const list = document.getElementById('book-list');
    //Create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
    list.appendChild(row);
  }
  // Show Alerts
  showAlert(message, clasName) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${clasName}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  // Delete Book
  deleteBook(target) {
    if (target.clasName === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  // Clear fields
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// Event Listeners add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  //Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  //Instantiate Book
  const book = new Book(title, author, isbn);

  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error Alert
    ui.showAlert("Please fill in all fields", 'error');

  } else {
    //Add book to list
    ui.addBookToList(book);

    // Show success
    ui.showAlert('Book Added!', 'success');
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();

  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});