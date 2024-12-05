import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthPanel from './Components/AuthPanel.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<AuthPanel form='login' />} />
        <Route path='/register' element={<AuthPanel form='register' />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </StrictMode>
);
