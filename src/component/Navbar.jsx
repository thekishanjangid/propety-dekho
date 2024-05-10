import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

import "../App.css";
import "../component/Navbar.css";

const Navbar = ({ setCount, count, category, setcategory }) => {
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

        // Call handleScroll once on initial load to determine the initial state
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    const logout = () => {
        localStorage.setItem("LoggedInUser", JSON.stringify({}));
        navigate("/"); // Navigate to the Signin page upon logout
        setCount(count + 1);
    };

    return (
        <div id="container" className={scrolled ? 'scrolled' : ''}>
            <div className="shopName"><Link to="/Home"><b>PROPERTY</b>DEKHO</Link></div>
            <div id="collection">
                <div id="Home"><Link to="/Home">HOME</Link></div>
                <div id="Properties"><Link to="/Properties">PROPERTIES</Link></div>
            </div>
            <div id="collection-login">
            <Link to="/owner"><div class="style__postContainer"> <div class="style__post">Post property</div> <div class="fre__outerwrap">FREE<div class="fre__innerwrap"></div>
              </div>
         </div></Link>
                <div id="contact" className='mt-1'><Link to="/Contactus">Contact Us</Link></div>
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
                        <div id="register"><Link to="/Signup"><FontAwesomeIcon icon={faUserPlus} /></Link></div>
                        {/* And login link */}
                        <div id="login"><Link to="/" className={location.pathname === "/" ? "scrolled" : ""}>Login</Link></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
