import React, {useState,useEffect} from 'react';
import BookEditor from './book-editor'
import {BookService} from '../services/book-service';
import {useParams, useHistory} from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';


const Component=(props)=>{

    console.log('props',props);
    const[book,setBook]=useState(null);

    const {isbn}=useParams();
    console.log('isbn',isbn);

    const history=useHistory();
    
    
    useEffect(()=>{
        BookService.instance.getBookByIsbn(isbn).then(setBook);
    })

    if(book===null){
        return <Loading/>
    }

    if(book===undefined){
        return <NotFound title="Book Not Found" message={`Missing isbn: ${isbn}`}/>
    }

    const handleSave=(book)=>{
        console.log('book',book);
        BookService.instance.update(isbn,book);
        history.push('/book/list'); //goto /book/list
    };

    return (
        <div>
            <h2>Edit Info</h2>
            <BookEditor book={book} onSave={handleSave}/>
        </div>
    );
};


export default Component;