import React from 'react';


const component = ({copyright,url})=>{

    return <footer>
            &copy; <a href={url}>{copyright}</a>
    </footer>

};

export default component;