import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthPanel from './Components/AuthPanel.jsx';
import Err from './Pages/err.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Err />} />
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Navbar />
              <AuthPanel login={true} />
              <Footer />
            </>
          }
        />
        <Route
          path='/register'
          element={
            <>
              <Navbar />
              <AuthPanel login={false} />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
