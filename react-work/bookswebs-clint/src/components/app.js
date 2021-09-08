import React from 'react'
import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppHome from './app-home';

const component=({title})=>{

    return <div className='main'>
            <AppHeader title={title} />
            <div className='container'>
                <AppHome/>
            </div>

            <AppFooter copyright="conceptarchitect.in" url="http://conceptarchitect.in" />
        </div>;
};


export default component;