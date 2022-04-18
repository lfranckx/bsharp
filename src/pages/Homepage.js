import '../styles/Homepage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import cello from '../images/cello.png';

export default function Homepage() {
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
                        <div className='content'>
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}