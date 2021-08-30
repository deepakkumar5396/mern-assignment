const express=require('express');
const Path=require('path');
const bodyParser=require('body-parser');
const fs=require('fs');

const app=express();
//add your middlewares here

//configure your view engine 
app.set('view engine','ejs');
//set view path location
app.set('views', Path.join(__dirname, 'src','views'))


//express should automatically handle static files
app.use(express.static(Path.join(__dirname, 'public')));

//handles form encoded data
app.use(bodyParser.urlencoded());

//handles json data
app.use(bodyParser.json());
 


//you data is configured here
let books=[];
const dbPath=Path.join(__dirname,'src','db','books-db.json');
fs.readFile(dbPath,(err,data)=>{
    if(err) {
        console.log('error reading db', err);
        return ;
    }

    books=JSON.parse(data);
    console.log(`total ${books.length} loaded...`);
});






//add you application url handlers here

app.get('/book/list', (request,response)=>{
   
    //render the file
    //pass the books parameter
    response.render('book/list', {books});

}); 

app.get('/book/details/:id',(request,response)=>{

    let id= request.params.id;
    console.log('sending books details', request.params);
    
    let book=books.find(b=>b._id===id);

    //pass the book object here
    response.render('book/details',{book}); 
}); 

app.get('/book/add',(request,response)=>{
    response.render('book/create');

});

app.get('/book/delete/:id',(request,response)=>{

    let id= request.params.id;
    console.log('sending books details', request.params);
    
    let book=books.find(b=>b._id===id);

    //pass the book object here
    response.render('book/delete',{book}); 
});

// app.post('/book/add',(request,response)=>{

    




app.post('/book/add',(request,response)=>{

    //console.log('request.body',request.body);

    let book =request.body;
    book._id=`${Date.now()}`;

    books.push(book); //add the book to the array

    fs.writeFile(dbPath, JSON.stringify(books), (error)=>{
        if(error){
            console.log('error saving data',error);
        } 

        
        response.redirect('/book/list'); //goto book list page
    });

    //response.send('book is added');
   

});
 
const port=5000;
const server=app.listen(port,()=>console.log(`server started on port ${port}`));
server.on('error', error=>console.log('error',error.message));
