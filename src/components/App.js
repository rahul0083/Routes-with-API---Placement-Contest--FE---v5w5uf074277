import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top-10" element={<Top />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <div className='container'></div>
    </div>
  )
}


export default App;
