const { response } = require('express');
const {Book} = require('../models/book');
const {ServiceError}= require('../utils/service-error');

class  BookService{

    constructor()
    {}    

    async getAllBooks(){
        return await Book.find();
    }

    async getBookByIsbn(isbn){
        
        let book=await Book.findOne({isbn});
        if(!book)
            throw new ServiceError(404, "Invalid Book Id", {isbn});
        else
            return book;       

    }

    async addBook(book){
        try{
            let newBook= new Book(book);
            await newBook.save();
            return newBook;
        } catch(error) {

            throw new ServiceError(400, error.message, {error});

        }
    }

    async getAllTitles(){

        let books=await Book.find({},{title:true}).sort({title:1});
        let titles= books.map(book=>book.title);

        return titles;

    }

    async removeBook(isbn){
        let book=await this.getBookByIsbn(isbn);
        await book.delete();

    }

    async updateBook(isbn, updatedInfo){
         let book=await this.getBookByIsbn(isbn);
        return await Book.findOneAndUpdate({isbn},updateInfo);
    }
    async getAllAuthors(){
        return await Book.distinct('author');
    }
    async getBooksByAuthor(author){
        const a= new RegExp(author,'i');
        return await Book.find({author:a})
    }

    async getBooksByTitle(title){
        return await Book.find({title:/title/i})
    }

    async getBooksByTag(tag){
        return await Book.find({tag:/tag/i})
    }

    async search(term){
        const a= new RegExp(term,'i');
        return await Book.find( { $text: { $search: a } })
    }

}

module.exports={BookService}