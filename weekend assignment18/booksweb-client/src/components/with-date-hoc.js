import React from 'react';


const withDate= OriginalComponent =>{


    const Hoc=(props)=>{

        const date=new Date();

        return (<div>            
                    <OriginalComponent {...props} date={date} />
            </div>);
    }

    return Hoc; //Hoc is like a wrapper to Original Component
};


export default withDate;

