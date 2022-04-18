import '../styles/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './Navbar';
import Homepage from '../pages/Homepage';

function App() {
  return (
    <>
    <Helmet>
      <title>B# Music Lessons | North Dallas Music Lesson Company</title>
      <meta name='description' content=''/>
      <meta name='keywords' content='' />
    </Helmet>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path='/' element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
