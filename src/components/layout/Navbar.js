import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <div className='nav-wrapper  cyan darken-2'>
                    <div className='container'>
                        <Link to='/' className='brand-logo'>Logo</Link>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <SignedOutLinks></SignedOutLinks>
                            <SignedInLinks></SignedInLinks>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar