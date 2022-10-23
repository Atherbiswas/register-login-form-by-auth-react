import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content p-3 text-xl">
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        <Link className='mx-3' to='/'>Home</Link>
        <Link className='mx-3' to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </div>
    );
};

export default Header;