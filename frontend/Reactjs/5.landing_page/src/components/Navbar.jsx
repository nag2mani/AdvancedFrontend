import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { 
    return (
        <nav className="navbar">
            <div className="container">
                <h3>Nagmani Kumar</h3>
                <Link to="/contact">
                    <button type="button" className="btn btn-light round-btn ms-auto">
                        Contact
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
