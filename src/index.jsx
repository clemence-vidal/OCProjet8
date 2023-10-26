import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Survey from './pages/Survey';
// import Banner from './components/Banner';
// import Card from './components/Card';
// import Error from './pages/Error';
// import Results from './pages/Results';
// import Freelances from './pages/Freelances';
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';
import Header from './components/Header/header';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Housing from './pages/Housing/housing';
import Error from './pages/Error/error';
import Footer from './components/Footer/footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;    
    box-sizing: border-box;    
    object-fit: cover;
    font-family: Montserrat;
    line-height: 142.6%;
  }
  body {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column; */
  }
  @media (min-width: 768px) {
    body {
      margin: 0 auto;
    }
  }
`

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />      
      <Header />      
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>         
      <Footer />  
    </Router>    
  </React.StrictMode>,
);