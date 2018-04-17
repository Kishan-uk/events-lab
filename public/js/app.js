// On Form SUBMIT - create book, add to list, reset form
const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;
  const genre = this.genre.value;

  addToList(title, author, category, genre);

  const form = document.querySelector('#book-form');
  form.reset();
};


// Add BOOK TO LIST
const addToList = function (title, author, category, genre){
  const bookTr = document.createElement('tr');
  const titleTd = document.createElement('td');
  titleTd.textContent = title;
  const authorTd = document.createElement('td');
  authorTd.textContent = author;
  const categoryTd = document.createElement('td');
  categoryTd.textContent = category;
  const genreTd = document.createElement('td');
  genreTd.textContent = genre;

  bookTr.appendChild(titleTd);
  bookTr.appendChild(authorTd);
  bookTr.appendChild(categoryTd);
  bookTr.appendChild(genreTd);

  const bookList = document.querySelector('#book-list');
  bookList.appendChild(bookTr);
};

// DELETE all BOOKS in list.
const handleDeleteButton = function () {
  const bookList = document.querySelector('#book-list');
  bookList.textContent = '';
  resetBookList();
};

const resetBookList = function () {
  const bookList = document.querySelector('#book-list');
  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Title';
  const authorHeader = document.createElement('th');
  authorHeader.textContent = 'Author';
  const categoryHeader = document.createElement('th');
  categoryHeader.textContent = 'Category';
  const genreHeader = document.createElement('th');
  genreHeader.textContent = 'Genre';
  bookList.appendChild(titleHeader);
  bookList.appendChild(authorHeader);
  bookList.appendChild(categoryHeader);
  bookList.appendChild(genreHeader);

}
document.addEventListener('DOMContentLoaded', () => {

  resetBookList();

  const form = document.querySelector('#book-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDeleteButton);
});  // end of addEventListener
