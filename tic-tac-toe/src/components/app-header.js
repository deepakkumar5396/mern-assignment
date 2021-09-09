import React from 'react'

const headerStyle={
    height:50,
    borderBottom:"1px solid gray"

};

const component=(props)=>{

    return (
        <div style={headerStyle}>
            <h1>{props.title}</h1>
        </div>
    );

}


export default component;