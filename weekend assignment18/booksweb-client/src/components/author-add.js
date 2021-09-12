import React, {useState}from 'react';
import {AuthorService} from '../services/author-service';
import {withRouter} from 'react-router-dom';


const Component=(props)=>{

    //console.log(props);

    const author={
        name:'',
        id:'',
        photo:'',
        biography:'' 
    };

    const handleSave=(author)=>{
        AuthorService.instance.addAuthor(author);
        props.history.push('/author/list'); //goto /book/list
    };

    return (
        <div>
          
        </div>
    );
};


export default withRouter(Component);