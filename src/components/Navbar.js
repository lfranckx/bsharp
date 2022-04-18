import '../styles/Navbar.scss';
import React from 'react';
import { Link } from 'react-scroll';
import Navlink from './Navlink';

export default function Navbar() {
    return (
        <div className='nav'>
            <div className='banner'></div>
            <nav>
                <h1><span className='red'>B#</span> Music Lessons</h1>
                <div className='navlinks'>
                    <Link className='link' activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={700}>ABOUT US</Link>
                    <Link className='link' activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={700}>PRICING</Link>
                    <Navlink />
                </div>
            </nav>
            <div className='banner'>
                <p>Concerned about the corona virus? <span><Link className='link' activeClass="active" to="pricing" spy={true} smooth={true} offset={0} duration={700}>Online lessons</Link></span> are available</p>
            </div>
        </div>
    )
}