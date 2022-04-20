import '../styles/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './Navbar';
import Homepage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';
import Footer from './Footer';

function App() {
  return (
    <>
    <Helmet>
      <title>B# Music Lessons | North Dallas Music Lesson Company</title>
      <meta name='description' content='B# Music brings high-quality education to the comfort of your own home. Learn to play an instrument in your own home by the best musicians in the world!'/>
      <meta name='keywords' content='In-person Music Lessons, Online Music Lessons, Guitar, Drums, Piano, Bass, Vocals' />
    </Helmet>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path='/' element={<Homepage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
