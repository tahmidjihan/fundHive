import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthProvider from './AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Layout({ children }) {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Layout;
