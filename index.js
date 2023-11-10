async function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const response = await fetch("https://anapioficeandfire.com/api/books")
    const gOTBooks = await response.json();
    renderBooks(gOTBooks)
    //findCharacters(gOTBooks)
     console.log(gOTBooks)

    
}
function findCharacters() {
  const main = document.querySelector('main')
  books.forEach(author => {
    const h3 = document.createElement('h3')
    h3.innerHTML = author.authors;
    main.appendChild(h3)
  })
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.numberOfPages;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
