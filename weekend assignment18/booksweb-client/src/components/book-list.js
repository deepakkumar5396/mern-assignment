import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Loading from './loading';

import {BookService} from '../services/book-service';



const Component = () => {

   const [books,setBooks]=useState([]);

   useEffect(()=>{
    BookService.instance.getAll().then(setBooks);     
   });

    const handleDelete=async (book)=>{

        if(window.confirm(`Are your sure you want to delete\n${book.title}\nYou can't undo the changes`)){
            await BookService.instance.removeBook(book.isbn);  //delete from the backend            
            setBooks(books.filter(b=>b.isbn!==book.isbn)); //delete from the UI.
        } else {
            //do nothing. no delete is done
        }
    }

    if(books.length===0){
        return <Loading text="building our recommendation"/>
    }

    return (
        <div className='book-list'>
            <h2>Our Recommendations</h2>

            <table className="table table-striped table-compact table-hover">
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        books.map((book) => (
                            <tr key={book.isbn}>
                                <td><img src={book.cover} /></td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    
                                    <Link to={`/book/details/${book.isbn}`} className='btn btn-sm btn-primary fa fa-info'>Info</Link>
                                    <Link to={`/book/edit/${book.isbn}`} className='btn btn-sm btn-primary fa fa-edit'>edit</Link>
                                    <button onClick={()=>handleDelete(book)} className='btn btn-sm btn-danger fa fa-trash-alt'>delete</button>
                                </td>
                            </tr>
                        ))
                    }



                </tbody>
            </table>

        </div>);
}

export default Component