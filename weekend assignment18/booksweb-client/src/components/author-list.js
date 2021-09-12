import React,{useEffect,useState} from 'react';
import "./author-card.css";
import {Link} from 'react-router-dom';
import Loading from './loading';
import {AuthorService} from '../services/author-service';



const Component = () => {

   const [authors,setAuthors]=useState([]);

   useEffect(()=>{
    AuthorService.instance.getAll().then(setAuthors);     
   });

    if(authors.length===0){
        return <Loading text="building our recommendation"/>
    }

    return (
      authors.map((author) => ( 
        <div className="card">
        <div className="container">
        <h4><b>{author.name}</b></h4> 
        <p>{author.biography}</p> 
            </div>
      </div>

    ))
    )
}

export default Component