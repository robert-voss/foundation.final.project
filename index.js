const myBookshelf = new Bookshelf();
myBookshelf.seed(bookData)

const titleInput = document.getElementById('title'); //grabbing the title Input
const authorInput = document.getElementById('author');//grabbing the author Input
const subjectsInput = document.getElementById('subjects');//grabbing the subjects Input
const languageInput = document.getElementById('language');//grabbing the language Input

// Add event listener for "Add Book" button click
document.getElementById('addBookBtn').addEventListener('click', function() {
    const title = titleInput.value;
    const author = authorInput.value;
    const subjects = subjectsInput.value;
    const language = languageInput.value;

    const newBook = new Book(author, language, subjects, title);

    myBookshelf.addBook(newBook) //updated the bookshelf instance
    myBookshelf.render() //make sure the Books render accordingly

  });

  
  

