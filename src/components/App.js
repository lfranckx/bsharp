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
      <meta name='description' content='B# Music Lessons brings high-quality education to the comfort of your own home. Individually tailored lessons to teach the fundamentals and have fun!'/>
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
