import { contains, copyObject, delay } from '../utils/core';



const url = 'http://localhost:5000/api/books/';

export class BookService {

    static instance = new BookService();

    constructor() {

    }

    getAll = async () => {
        try {
            let response = await fetch(url);
            console.log('response', response);
            if (response.status !== 200) {
                console.error('http error', response.status);
                return [];
            }
            let books = await response.json();
            return books;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }


    addBook = (book) => {
        this.books.push(book);
        this.save();
    }

    removeBook = async (isbn) => {
        await delay(100);
        this.books = this.books.filter(b => b.isbn !== isbn);
        this.save();
    }



    getBookByIsbn = async (isbn) => {
        await delay(2000);
        return this.books.find(book => book.isbn === isbn);
    }

    getBooksByAuthor = (author) => {
        return this.books.filter(book => contains(book.author, author));
    }

    getBooksByTitle = (title) => {
        return this.books.filter(book => contains(book.title, title));
    }

    async update(isbn, book) {
        let existing = await this.getBookByIsbn(isbn);
        if (existing) {
            copyObject(existing, book);
            console.log('existing', existing);
            this.save();
        }
    }

}