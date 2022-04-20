import React from 'react';
import '../styles/Pricing.scss';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import inPerson from '../images/in-person.png';
import virtual from '../images/virtual.png';

export default function Pricing() {
    return (
        <>
            <section id='pricing'>
                <div className='banner'>
                    <div className='content'>
                        <div className='btn-wrap'><Link to={'/contact'} className='btn'>Schedule Now</Link></div>
                        <h2><span className='white'>How We</span> <span className='red'>Work</span></h2>
                        <div className='fill'></div>
                    </div>
                </div>
                <div className='content-wrap'>
                    <ul className='content'>
                        <li className='card top'>
                            <h3>Getting Started</h3>
                            <ul>
                                <li>
                                    <div className='wrap'><AiFillCheckCircle className='check' /></div>
                                    <p><Link className='bold' to='/contact'>Book your first free lesson</Link></p>
                                </li>
                                <li>
                                    <div className='wrap'><AiFillCheckCircle className='check' /></div>
                                    <p>We will come to you or we can connect through Zoom</p>
                                </li>
                                <li>
                                    <div className='wrap'><AiFillCheckCircle className='check' /></div>
                                    <p>Like what you learn? Start your weekly schedule</p>
                                </li>
                            </ul>
                        </li>

                        <li className='card top'>
                            <h3>Payment Schedule</h3>
                            <ul>
                                <li>
                                    <div className='wrap'><AiFillCheckCircle className='check' /></div>
                                    <p>Every 4 weeks you will pay for your lessons</p>
                                </li>
                                <li>
                                    <div className='wrap'><AiFillCheckCircle className='check' /></div>
                                    <p>Pricing options are for 30 minute lessons or 60 minutes</p>
                                </li>
                                <li>
                                    <div className='wrap'><AiFillCheckCircle className='check' /></div>
                                    <p>Cancel anytime!</p>
                                </li>
                            </ul>
                        </li>

                        <li className='card bottom'>
                            <div className='img-wrap'><img src={inPerson} alt='Student taking guitar lessons in-person' /></div>
                            <div className='text-wrap'>
                                <h3>Learn In-Person</h3>
                                <p>Want the best instruction you can get all from the comfort of your own home? Our teachers will come to you and give you expert instruction.</p>
                                <p className='price'>30 Minutes: <span className='bold'>$50</span></p>
                                <p className='price'>60 Minutes: <span className='bold'>$80</span></p>
                                <div className='btn-wrap'>
                                    <Link className='btn-secondary' to='/contact'>Get Started</Link>
                                </div>
                            </div>
                        </li>

                        <li className='card bottom'>
                            <div className='img-wrap'><img src={virtual} alt='Student taking guitar lessons online' /></div>
                            <div className='text-wrap'>
                                <h3>Learn Online</h3>
                                <p>Want the best instruction you can get all from the comfort of your own home? Our teachers will come to you and give you expert instruction.</p>
                                <p className='price'>30 Minutes: <span className='bold'>$44</span></p>
                                <p className='price'>60 Minutes: <span className='bold'>$70</span></p>
                                <div className='btn-wrap'>
                                    <Link className='btn-secondary' to='/contact'>Get Started</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}