import React from 'react';


const component = ({ title }) => {

    return <nav className="navbar navbar-expand-lg   navbar-dark bg-dark" >
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/book/list">Books <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/book/add">Add Book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Authors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add Author</a>
                </li>

            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Members
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Login</a>
                        <a className="dropdown-item" href="#">Register</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Login</a>
                    </div>
                </li>
                
            </ul>
        </div>
    </nav>;

};

export default component;