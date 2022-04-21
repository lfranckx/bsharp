import React from 'react';
import '../styles/Testimonials.scss';
import { GiGClef } from 'react-icons/gi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import zack from '../images/zack.png';
import viv from '../images/vivian.png';
import jason from '../images/jason.png';
import { Link } from 'react-router-dom';

export default function Testimonials() {
    return (
        <>
            <section id='testimonials'>
                <div className='title-wrap'>
                    <h2 className='white'>Testimonials <GiGClef className='clef' /> Reviews</h2>
                    <h3 className='white'>Hear what our students have to say</h3>
                </div>
                <div className='content-wrap'>
                    <ul className='content'>
                        <li className='card'>
                            <div className='img-wrap'><img src={zack}alt='Zack headshot' /></div>
                            <div className='text-wrap'>
                                <h3>Zack</h3>
                                <div className='text-left'>
                                    <FaQuoteLeft className='quote-left' />
                                </div>
                                <p>My lessons don't feel like an instructor is coming to my house and teaching me how to play the drums. It actually feels like two friends getting together and one is teaching the other how to play.</p>
                                <div className='text-right'>
                                    <FaQuoteRight className='quote-right' />
                                </div>
                            </div>
                        </li>
                        <li className='card'>
                            <div className='img-wrap'><img src={viv}alt='Vivian headshot' /></div>
                            <div className='text-wrap'>
                                <h3>Vivian</h3>
                                <div className='text-left'>
                                    <FaQuoteLeft className='quote-left' />
                                </div>
                                <p>My lessons don't feel like an instructor is coming to my house and teaching me how to play the drums. It actually feels like two friends getting together and one is teaching the other how to play.</p>
                                <div className='text-right'>
                                    <FaQuoteRight className='quote-right' />
                                </div>
                            </div>
                        </li>
                        <li className='card'>
                            <div className='img-wrap'><img src={jason}alt='Jason headshot' /></div>
                            <div className='text-wrap'>
                                <h3>Jason</h3>
                                <div className='text-left'>
                                    <FaQuoteLeft className='quote-left' />
                                </div>
                                <p>My lessons don't feel like an instructor is coming to my house and teaching me how to play the drums. It actually feels like two friends getting together and one is teaching the other how to play.</p>
                                <div className='text-right'>
                                    <FaQuoteRight className='quote-right' />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='content-wrap'>
                    <div className='content-bar'>
                        <div className='item'><h3>Want your first free lesson?</h3></div>
                        <div className='item text'><p>Send us a message and we’ll set up the time and day. No strings attached.</p></div>
                        <div className='item btn-wrap'>
                            <Link to='/contact' className='btn' >Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}