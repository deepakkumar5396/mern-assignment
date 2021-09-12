
import React, {useState} from 'react';

const Component = (props) => {

    const [text,setText]=useState('');

    const handleSearch= ()=>{
        if(props.onSearch) 
            return props.onSearch(text);
        else
            console.error('SearchBar should be given a onSearch function...');
    }
  
    return (<form className="form-inline my-2 my-lg-0">
        <input  onChange={e=>setText(e.target.value)} 
                value={text} 
                className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
    </form>);

}

export default Component;