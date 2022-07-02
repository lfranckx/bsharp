import React, { useEffect, useState } from 'react';
import '../styles/Homepage.scss';
import '../styles/About.scss';
import { Link } from 'react-router-dom';
import cello from '../images/cello.png';
import jordan from '../images/jordan-square.png';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

export default function Homepage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [content, toggleContent] = useState(0);
    
    return (
        <div id='homepage'>
            <header>
                <h1>
                    <span>FIRST LESSON IS FREE</span>
                    <span>NO STRINGS ATTACHED</span>
                </h1>

                <div className='overlay'></div>

                <div className='btn-wrap'>
                    <Link className='btn' to='/contact'>GET STARTED</Link>
                </div>
            </header>

            <main>
                <section id='about'>
                    <div className='banner'>
                        <h2><span>About</span> <span>B# Music Lessons</span></h2>
                    </div>
                    <div className='content-wrap'>
                        {content === 0 && <div className='content'>
                            <div className='img-wrap'>
                                <img src={cello} alt='cello graphic' />
                            </div>
                                <div className='text-wrap'>
                                    <p>
                                        <span className='italic bold'>B# Music </span>
                                        provides private in-home or virtual music instruction in guitar, piano, voice, drums, bass, and songwriting. We tailor each lesson to the student’s specific goals and musical taste while providing the fundamentals of musicianship. Our instructors create a friendly learning environment allowing students to grow at their own pace. Our instructors are professional songwriters, recording artists, and performing musicians, and it is this real-world experience that makes their approach unique.
                                    </p>
                                    <p>
                                        We offer at-home instruction and online lessons through Zoom to make learning on your schedule manageable and flexible.
                                    </p>
                                    <div className='btn-wrap'>
                                        <button className='btn' onClick={() => {toggleContent(1)}}>Meet the Teacher</button>
                                    </div>
                                </div>
                        </div>}
                        {content === 1 && <div className='content'>
                            <div className='img-wrap'>
                                <img src={jordan} alt='Jordan Lee Wilson' />
                            </div>
                            <div className='text-wrap'>
                                <p>I am a lifelong musician with a Bachelor's Degree in Music and more than 10 years of teaching experience. I teach all experience levels! If you're looking to start your first instrument, restarting after a long hiatus, or you are a seasoned musician looking for new insights, I can help!</p>
                                <p>I teach the student what they want to learn as well as the foundations of musicianship all while creating a comfortable learning environment and making it fun!</p>
                                <div className='btn-wrap'>
                                    <button className='btn' onClick={() => {toggleContent(0)}}>Go Back</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    
                </section>

                <Pricing />
                <Testimonials />
            </main>
        </div>
    );
}