import React from 'react'


const component=({message,moves})=>{

    if(message.startsWith("Next"))
        message=`${message} (${9-moves} left)`;

    return (
        <h2>{message}</h2>
    );

}


export default component;