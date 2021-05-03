import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    
    const changeThemeDark = (e) => {
        
        props.setmode(!props.mode)
    }
    return (
        <header className="mb-4">
            <nav className="navbar navbar-light bg-secondary">
                <div className="container-fluid">
                    <Link to={`/`}>
                        <a className="navbar-brand" href="#">
                            <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Countries App
                </a>
                    </Link>
                    <button className="btn btn-success" onClick={changeThemeDark}>Theme</button>
                </div>
            </nav>
        </header >);
}

export default Header;