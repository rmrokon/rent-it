import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const pages = ["Rent", "Favorites"]

function Header() {
    return (
        <div className='headerContainer'>
            <div className='logo'>RENT IT</div>

            <ul className='links'>
                {
                    pages.map((page, index) => <li key={index}><NavLink
                        to={`${page}`}
                        className={({ isActive }) =>
                            isActive ? "activeLink" : "notActiveLinks"
                        }
                    >
                        {page.toUpperCase()}
                    </NavLink></li>)
                }
            </ul>


            <div className='authenticationBtns'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div >
    )
}

export default Header