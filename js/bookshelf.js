class Bookshelf {
    constructor(){
        this.books = [];
        this.favorites = []; // Array to store favorite books
        this.favoriteBooksCount = 0
        this.comments = []
    }
    seed(bookData){
        this.books = bookData.map((book) => new Book(book.author, book.language, book.subject, book.title))
        this.render()

    }
    addBook (book) {
        this.books.push(book);
      }
    
    render(){
       const bookshelfWrapper = document.createElement("div") 
       const bookList = document.createElement("ul")

            for (const book of this.books) {
            const bookListItem = book.render();
            bookList.append(bookListItem); 
        }
         
        bookshelfWrapper.append(bookList)
        document.body.append(bookshelfWrapper);       
}
    updateFavorites(){
        this.favorites = this.books.filter(book => book.isFavorite);
    }

    getTotalFavoriteBooksCount() {
        return this.books.reduce((count, book) => {
            if (book.isFavorite) {
                count++; // increment count if book is favorite
            }
            return count;
        }, 0); // initial count is 0
        
    }
 }
    

