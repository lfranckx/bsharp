import '../styles/Navbar.scss';
import React from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    return (
        <div id='nav'>
            <nav>
                <h1><NavLink to='/' className={'link'} ><span className='red'>B#</span> Music Lessons</NavLink></h1>
                <ul className='navlinks'>
                    {location.pathname === '/' ? <li><Link className='link' activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={700}>ABOUT US</Link></li> : <li></li>}
                    {location.pathname === '/' ? <li><Link className='link' activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={700}>PRICING</Link></li> : <li></li>}
                    <li><Link className='btn-secondary' activeClass="active" to="footer" spy={true} smooth={true} offset={0} duration={700}>JOIN</Link></li>
                    {location.pathname === '/' ? <li><NavLink to='/contact' className={'btn'} >CONTACT</NavLink></li> : <li><NavLink to='/' className={'btn'} >HOME</NavLink></li>}
                </ul>
            </nav>
            <div className='banner'>
                <p>Concerned about the corona virus? <span><Link className='link' activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={700}>Online lessons</Link></span> are available</p>
            </div>
        </div>
    )
}