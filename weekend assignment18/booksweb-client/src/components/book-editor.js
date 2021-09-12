import React, {useState}from 'react';
import {LabeledInput,LabeledTextArea} from './input-controls';


const BookEditor=(props)=>{

    const [book,setBook]=useState(props.book);
   

    const handleSave=(e)=>{
        e.preventDefault();
        //console.log('book',book);
        props.onSave(book);
        
    }

    const handleChange=(id,value)=>{
        book[id]=value;
        setBook({...book});
    }

    return (
        <form>
            <LabeledInput value={book.isbn} id='isbn' onChange={handleChange} />
            <LabeledInput value={book.title} id="title" onChange={handleChange} />
            <LabeledInput value={book.author} id="author" onChange={handleChange} />
            <LabeledInput value={book.price}  id="price" onChange={handleChange} />
            <LabeledInput value={book.cover} id="cover" onChange={handleChange} />
            <LabeledTextArea value={book.description} id="description" onChange={handleChange} />
            <button onClick={handleSave} type="submit" className='btn  btn-primary'>Save</button>
        </form>
    );
};

export default BookEditor;