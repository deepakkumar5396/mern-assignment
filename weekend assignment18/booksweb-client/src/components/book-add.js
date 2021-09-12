import React, {useState}from 'react';
import BookEditor from './book-editor'
import {BookService} from '../services/book-service';
import {withRouter} from 'react-router-dom';


const Componentauthor=(props)=>{

    //console.log(props);

    const book={
        isbn:'',
        title:'',
        author:'',
        price:0,
        description:'',
        cover:''
    };

    const handleSave=(book)=>{
        BookService.instance.addBook(book);
        props.history.push('/book/list'); //goto /book/list
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <BookEditor book={book} onSave={handleSave}/>
        </div>
    );
};


export default withRouter(Componentauthor);