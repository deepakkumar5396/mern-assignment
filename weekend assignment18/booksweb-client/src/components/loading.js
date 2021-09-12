import React from 'react';


const Component=({title,text,image})=>{

    if(!image){
        image='/images/loading.gif';        
    }
    if(!title){
        title="Please wait"
    }

    if(!text){
        text="loading your request...";
    }

    return (<div className='loading'>
        <h2>{title}</h2>
        
        <img src={image} alt={text} />
        <p>{text}</p>
    </div>);
}

export default Component;