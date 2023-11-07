import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Housing from './pages/Housing/housing';
import Error from './pages/Error/error';
import Footer from './components/Footer/footer';
import "./App.scss";



const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* <GlobalStyle />       */}
      <Header />      
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>         
      <Footer /> 
       
    </Router>    
  </React.StrictMode>,
);