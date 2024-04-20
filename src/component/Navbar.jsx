import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

import "../App.css";
import "../component/Navbar.css";

const Navbar = ({ setcount, count, category, setcategory }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(true); // Initialize scrolled state to true by default

    useEffect(() => {
        const handleScroll = () => {
            const isHome = location.pathname === "/Home";
            const isScrolled = window.scrollY > 0;

            // Apply scrolled class if not on Home page or if scrolled
            setScrolled(!isHome || isScrolled);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    useEffect(() => {
        // Set scrolled to false if on Home page and not scrolled
        if (location.pathname === "/Home") {
            setScrolled(false);
        }
    }, [location.pathname]);

    const logout = () => {
        localStorage.setItem("LoggedInUser", JSON.stringify({}));
        navigate("/"); // Navigate to the Signin page upon logout
        setcount(count + 1);
    };


    
    return (
        <div id="container" className={scrolled ? 'scrolled' : ''}>
            <div className="shopName"><Link to="/Home"><b>PROPERTY</b>DEKHO</Link></div>
            <div id="collection">
                <div id="Home"><Link to="/Home">HOME</Link></div>
                <div id="Properties"><Link to="/Properties">PROPERTIES</Link></div>
                
            </div>
            <div id="collection-login">
                <div id="contact" className='mt-1'><Link to="/Home">Contect Us</Link></div>
                <div id="about" className='mt-1'><Link to="/Home">About Us</Link></div>
                {/* Check if the user is logged in */}
                {localStorage.getItem("LoggedInUser") ? (
                    <>
                        {/* If logged in, show logout icon */}
                        <div id="logout" onClick={logout}><FontAwesomeIcon className='btn btn-outline-light rounded-1' icon={faPowerOff} /></div>
                        {/* Also, show profile icon */}
                        <div id="profile"><Link to="/profile"><FontAwesomeIcon className='btn btn-outline-light rounded-1' icon={faUser} /></Link></div>
                    </>
                ) : (
                    <>
                        {/* If not logged in, show register icon */}
                        <div id="register"><Link to="/register"><FontAwesomeIcon icon={faUserPlus} /></Link></div>
                        {/* And login link */}
                        <div id="login"><Link to="/Signin">Login</Link></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
