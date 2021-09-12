import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search-bar';


const component = ({ title }) => {

    return <nav className="navbar navbar-expand-lg   navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/book/list">Books <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/book/add">Add Book</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/author/list">Authors</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/author/add">Add Author</Link>
                </li>

            </ul>
            <SearchBar onSearch={text=>console.log('searching for ',text)}/>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Members
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/user/signin">Login</Link>
                        <Link className="dropdown-item" to="/user/signup">Register</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/user/signout">Logout</Link>
                    </div>
                </li>
                
            </ul>
        </div>
    </nav>;

};

export default component;