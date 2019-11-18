import React from 'react';
import { Link } from 'react-router-dom'
 
const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <Link to='/' class="brand-logo">Logo</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
               
                </ul>
            </div>
        </nav>
    )
}

export default Navbar