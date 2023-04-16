class Book {
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.isFavorite = false
        this.favoriteBooksCount = 0
        this.comments = []
    }
    render(){
        const bookInfo = document.createElement("li")
        bookInfo.innerHTML = `The title of this book is ${this.title} written by ${this.author} in ${this.language}, about ${this.subject}`
        
        bookInfo.style.color = "brown"
        bookInfo.style.fontFamily = "Charcoal,sans-serif"
        bookInfo.style.width = "50%"
        bookInfo.style.border = "4px solid black"
        bookInfo.style.listStyleType = "none"
        bookInfo.style.margin = "15px"

        

        // Create "Favorite" button
        const favoriteButton = document.createElement("button");
        favoriteButton.textContent = "Favorite";
        
        // Add event listener to toggle favorite status and update UI
        favoriteButton.addEventListener("click", () => {
            this.isFavorite = !this.isFavorite; // toggle favorite status
            if (this.isFavorite === true) {
                favoriteButton.style.backgroundColor = "green"; // set color to green if favorite
            } else {
                favoriteButton.style.backgroundColor = ""; // reset color if not favorite
            }
        favoriteButton.addEventListener("click", () => {
            this.favoriteBooksCount = 0;
            
            if (this.isFavorite === true) {
                this.favoriteBooksCount++; // increment count if book is favorite
            }

        })   
        })
        

        // Create DOM element to display favorite books count
        const favoriteCountElement = document.createElement("p");
        favoriteCountElement.innerHTML = `Total Favorite Books: ${this.favoriteBooksCount}`;
        favoriteCountElement.style.position = "absolute"
        favoriteCountElement.style.fontWeight = "normal"
        favoriteCountElement.style.top = "15px"
        favoriteCountElement.style.right = "135px"
        favoriteCountElement.style.border = "3px solid black"
        
        document.body.append(favoriteCountElement); // append favorite count element

        bookInfo.append(favoriteButton)

        const commentBtn = document.createElement("button")
        commentBtn.innerHTML = "Comment"

        commentBtn.addEventListener("click", () =>{
            const commentSection = document.createElement("textarea")
            commentSection.setAttribute('cols', 30)
            commentSection.setAttribute('rows', 10)
            commentSection.setAttribute('maxLength', 280)

            //This is the send button that appears alongside the textarea 
            const sendBtn = document.createElement('button')
            sendBtn.innerHTML = 'Send'
            //This is the book instance maintaining user comments
            const userComment = commentSection.value
            this.comments.push(userComment)

            bookInfo.append(sendBtn)
            bookInfo.append(commentSection)
        })

        



        bookInfo.append(commentBtn)
    
        return bookInfo
        /* I styled the rendered content in this way so that it could
        be easier to read as you scroll down the page.  The width being
        at 50% makes it easier to read so that you don't have to scroll
        across the page and back to read the content*/
    }

    toggleFavorite(){
        // Toggle the isFavorite property of the book
        this.isFavorite = !this.isFavorite;
    }

    
}

