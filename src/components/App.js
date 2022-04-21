import '../styles/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Homepage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';
import Footer from './Footer';
import NotFound from '../pages/404';

function App() {
  return (
    <>
    <Helmet>
      <meta name='description' content='B# Music Lessons brings high-quality education to the comfort of your own home. Individually tailored lessons to teach the fundamentals and have fun!'/>
      <title>B# Music Lessons | North Dallas Private Lessons</title>
    </Helmet>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
