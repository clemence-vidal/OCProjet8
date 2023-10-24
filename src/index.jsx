import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';
// import Survey from './pages/Survey';
import Header from './components/Header';
// import Banner from './components/Banner';
// import Card from './components/Card';
import Footer from './components/Footer';
// import Error from './pages/Error';
// import Results from './pages/Results';
// import Freelances from './pages/Freelances';
import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    body {
      margin: 0 auto;
    }
  }
`


ReactDOM.render(
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
  document.getElementById('root')
);