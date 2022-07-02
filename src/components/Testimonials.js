import React from 'react';
import '../styles/Testimonials.scss';
import { GiGClef } from 'react-icons/gi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
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
                            <div className='name-wrap'><h3>Christopher B.</h3></div>
                            <div className='text-wrap'>
                                <div className='text-left'>
                                    <FaQuoteLeft className='quote-left' />
                                </div>
                                <p>Jordan is an excellent guitar instructor for our 14 year old. Jordan is patient and provides techniques that make learning the instrument fun. He comes to our house once a week for lessons, he is always on time and professional.</p>
                                <div className='text-right'>
                                    <FaQuoteRight className='quote-right' />
                                </div>
                            </div>
                        </li>
                        <li className='card'>
                            <div className='name-wrap'><h3>Chris M.</h3></div>
                            <div className='text-wrap'>
                                
                                <div className='text-left'>
                                    <FaQuoteLeft className='quote-left' />
                                </div>
                                <p>I can't say enough about Jordan's teaching. He's got incredible chops and knowledge, he asks the right questions to find out right where my knowledge ends and he starts paving the road from there, and he's just a lot of fun to talk about music with. Take lessons from Jordan.</p>
                                <div className='text-right'>
                                    <FaQuoteRight className='quote-right' />
                                </div>
                            </div>
                        </li>
                        <li className='card'>
                            <div className='name-wrap'><h3>Reid S.</h3></div>
                            <div className='text-wrap'>
                                <div className='text-left'>
                                    <FaQuoteLeft className='quote-left' />
                                </div>
                                <p>Jordan has been a fantastic coach. He is great at creating a laid back atmosphere that is fun, while coming up with creative ways to keep pushing the envelope and improving. Would recommend him to any person looking to learn guitar.</p>
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