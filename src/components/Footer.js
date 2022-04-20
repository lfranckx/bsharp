import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();

    return(
        <footer id='footer'>
            <div className='content-wrap'>
                <div className='content'>
                    <div className='newsletter-wrap'>
                        <h3>Sign up for our newsletter</h3>
                        <h4>Be sharp and the first to know about special offers &amp; news</h4>

                        <SignUpForm />
                    </div>

                    <div className='menu-wrap'>
                        <p>MAIN MENU</p>
                        <ul className='menu'>
                            {location.pathname === '/' ? 
                                <li>
                                    <Link className='link' activeClass="active" to="nav" spy={true} smooth={true} offset={0} duration={700}>HOME</Link>
                                </li>
                                :
                                <li>
                                    <NavLink to='/' className='link'>HOME</NavLink>
                                </li>
                            }
                            {location.pathname === '/' ? 
                                <>
                                    <li>
                                        <Link className='link' activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={700}>ABOUT US</Link>
                                    </li>
                                    <li>
                                        <Link className='link' activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={700}>PRICING</Link>
                                    </li>
                                    <li>
                                        <NavLink to='/contact' className='link'>CONTACT</NavLink>
                                    </li>
                                </>
                                : <></>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <small>Copyright © 2021. All rights reserved. B# Music Lessons. LLC</small>
        </footer>
    );
}