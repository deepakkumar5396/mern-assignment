import React, {useState}from 'react';
import If from './if';



const withExpander= (OriginalComponent,initialShow=false) =>{
   

    const Hoc=(props)=>{
        const [show, setShow]= useState(initialShow);
        
        const handleClick=()=>{
            setShow(!show);
        }

        return (<div>    
                    <button onClick={handleClick} >{show?'Hide':'Show'}</button>
                    <If condition={show}>
                        <OriginalComponent {...props} />
                    </If>
            </div>);
    }

    return Hoc; //Hoc is like a wrapper to Original Component
};


export default withExpander;

