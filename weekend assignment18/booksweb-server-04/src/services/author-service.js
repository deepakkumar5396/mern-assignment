const { response } = require('express');
const {Author} = require('../models/author');
const {ServiceError}= require('../utils/service-error');

// not uderstand.
function bindMethods(object){
    console.log('started binding...',object);
    for(let prop in object){
        let propValue=object[prop];
        console.log('prop',prop);
        if(typeof(propValue)==='function'){
            console.log('binding', propValue);
            propValue.bind(object);
        }
    }
}

class  AuthorService{

    constructor(){
        //bindMethods(this);   
        
        const functions=[ this.getAllAuthors,  
                          this.getAuthorById, 
                          this.deleteAuthor,
                          this.addAuthor,
                          this.updateAuthor
                        ];

        for(let f of functions){
            //console.log(f.name); 
            this[f.name] = f.bind(this);
        }
    }    

    async getAllAuthors(){
        return await Author.find();
    }

    async getAuthorById({id}){
        
        let author=await Author.findOne({id:id});
        if(!author)
            throw new ServiceError(404, "Invalid Book Id", {id:id});
        else
            return author;       

    }

    async addAuthor({body}){
        try{
            let newAuthor= new Author(body);
            await newAuthor.save();
            return newAuthor;
        } catch(error) {

            throw new ServiceError(400, error.message, {error});

        }
    }

    async updateAuthor({id,body}){
         let author=await this.getAuthorById({id});
        return await Author.findOneAndUpdate({id:id},body);
    }
    async deleteAuthor({id}){
        try{
        let author=await this.getAllAuthorById({id});
        await author.delete();
        }catch(e){
            console.log(e);
        }

    }

}

module.exports={AuthorService};