import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/404.scss';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <meta name='description' content='404, Page Not Found. Return to B# Music Lessons Home'/>
                <title>404 | B# Music Lessons</title>
            </Helmet>
            <main>
                <div id='not-found-page'>
                    <h2><span>404</span>Oops, the page you are looking for does not exist.</h2>
                    <div className='btn-wrap'>
                        <Link className="btn" to="/">Return Home</Link>
                    </div>
                </div>
            </main>
        </>
    )
}