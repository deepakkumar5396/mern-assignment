const {BookService} = require('../services/book-service-old.js');

//console.log('BookService',BookService);

const service=new BookService();

class BookController {
    
    constructor(){
        //service=new BookService();

        //this.getAllBooks=this.getAllBooks.bind(this);
        //do this for all methods
    }

    async getAllBooks(request,response){
        const books=await service.getAllBooks();
        response.json(books);        
    }

    async getBookByIsbn(request,response){
        try{
            const book=await service.getBookByIsbn(request.params.id);
            response.json(book)
        }catch(e){
            response.status(e.status).json(e.details);
        }
    }

    async addBook(request,response){
        try{
            const result=await service.addBook(request.body);
            response.status(201).json(result);
        }catch(e){
            response.status(e.status).json(e.details);
        }
    }

    async getAllAuthors(request,response){
        let authors= await service.getAllAuthors();
        response.json(authors);
    }

    async getBookTitles(request,response){
        let titles= await service.getAllTitles();
        response.json(titles);
    }

    async getBooksByAuthor(request,response){
        let books= await service.getBooksByAuthor(request.params.author);
        response.json(books);
    }

    async search(request,response){
        try{
        console.log(request.query);
        let result=await service.search(request.query.q);
        response.send(result);
        }catch(err){
            response.send(err);
        }
    }

}

module.exports={BookController};