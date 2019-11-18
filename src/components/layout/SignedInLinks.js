import React from 'react';
import { NavLink } from 'react-router-dom'
 
const SignedInLinks = () => {
    return (
        <React.Fragment>
            <li><NavLink to='/'>New Project</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating grey pulse'>DM</NavLink></li>
            <i className="large material-icons">account_circle</i>
        </React.Fragment>
    )
}

export default SignedInLinks