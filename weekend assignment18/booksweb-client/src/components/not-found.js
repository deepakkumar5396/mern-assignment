import React from 'react';

const Component = ({title,message})=>{
    if(!title){
        title="Not Found";
    }

    if(!message){
        message=`Not Found: ${window.location.href}`;
    }

    return (
        <div>
            <h2>{title}</h2>
            <p>{message}</p>            
        </div>
    );
}

export default Component;