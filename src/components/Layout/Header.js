import React from 'react';
import {Link} from 'react-router-dom';//to create links for our routes
const Header = () => {
    return (
        <header  className="text-center" >
        <h1>Todo List</h1>
        <Link to={process.env.PUBLIC_URL + '/'} >Home</Link>|
                <Link to={process.env.PUBLIC_URL + '/about'} >About</Link>
        </header> 
    )
}
export default Header;