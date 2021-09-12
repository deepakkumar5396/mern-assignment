import React, {useState,useEffect}from 'react';
import "./book-details.css";
import {withRouter} from 'react-router-dom';
import {BookService} from '../services/book-service';
import Loading from './loading';
import NotFound from './not-found';


const Component=(props)=>{

    const [book,setBook]=useState(null,props,);
    const isbn=props.match.params.isbn;
    useEffect(()=>{
        
        //book will come after a delay
        BookService.instance.getBookByIsbn(isbn).then((book)=>{
            console.log(`got for ${isbn}: ${book}`);
            setBook(book);
        });        
    },[props.match.params.isbn]);
    
    if(book===null){
        return <Loading title={`searching for ${isbn}`} />
    }

    if(book===undefined){
        return <NotFound message={`Sorry no book with isbn: ${isbn} present in our record`}/>
    }


    return (
        <div className='book-details'>
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            
            <div className='book-info'>
                <img src={book.cover}/>
                <div className='info'>
                    <ul>
                        <li>Price: {book.price}</li>
                        <li>Rating: {book.rating}</li>
                    </ul>
                    <hr/>
                    <h4>Synopsis</h4>
                    <p>{book.description}</p>
                    {/* <Expander title="Synopsis" content={book.description} short={200} /> */}
                </div>
            </div>
        </div>
    );
}


export default withRouter(Component);