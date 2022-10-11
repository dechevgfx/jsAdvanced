class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.emptySlots = this.capacity - this.books.length;
    }
    addBook(bookName, bookAuthor) {
        if (typeof bookName === "string" && typeof bookAuthor === "string") {
            if (this.emptySlots > 0) {
                this.books.push({
                    bookName,
                    bookAuthor,
                    payed: false,
                });
                this.emptySlots = this.capacity - this.books.length;
                return `The ${bookName}, with an author ${bookAuthor}, collect.`;
            } else {
                throw new Error("Not enough space in the collection.");
            }
        }
    }
    payBook(bookName) {
        let findIndex = this.books.findIndex(
            (book) => book.bookName === bookName,
        );

        if (findIndex == -1) {
            throw new Error(`${bookName} is not in the collection.`);
        } else {
            if (this.books[findIndex].payed === true) {
                throw new Error(`${bookName} has already been paid.`);
            } else {
                this.books[findIndex].payed = true;
                return `${bookName} has been successfully paid.`;
            }
        }
    }
    removeBook(bookName) {
        let findIndex = this.books.findIndex(
            (book) => book.bookName === bookName,
        );
        if (findIndex == -1) {
            throw new Error("The book, you're looking for, is not found.");
        } else {
            if (this.books[findIndex].payed === false) {
                throw new Error(
                    `${bookName} need to be paid before removing from the collection.`,
                );
            } else {
                this.books.splice(findIndex, 1);
                return `${bookName} remove from the collection.`;
            }
        }
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let firstLine = `The book collection has ${this.emptySlots} empty spots left.`;
            let secondLineArray = [];
            this.books.sort((a, b) => {
                a.bookName.localeCompare(b.bookName);
            });
            this.books.forEach((book) => {
                secondLineArray.push(
                    `${book.bookName} == ${book.bookAuthor} - ${
                        book.payed ? `Has Paid` : `Not Paid`
                    }.`,
                );
            });
            return `${firstLine}\n${secondLineArray.join("\n")}`;
        } else {
            let authorsBooks = [];
            let returnMsg = [];
            for (const book of this.books) {
                if (book.bookAuthor === bookAuthor) {
                    authorsBooks.push(book);
                }
            }
            if (authorsBooks.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                authorsBooks.forEach((book) => {
                    returnMsg.push(
                        `${book.bookName} == ${book.bookAuthor} - ${
                            book.payed ? `Has Paid` : `Not Paid`
                        }.`,
                    );
                });
                return returnMsg.join("\n");
            }
        }
    }
}

const library = new LibraryCollection(5) 

library.addBook('Don Quixote', 'Miguel de Cervantes'); 

library.payBook('Don Quixote'); 

library.addBook('In Search of Lost Time', 'Marcel Proust'); 

library.addBook('Ulysses', 'James Joyce'); 

console.log(library.getStatistics()); 
console.log(library.getStatistics('Ivan')); 