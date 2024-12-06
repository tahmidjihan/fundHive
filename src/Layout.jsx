import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthProvider from './AuthProvider';

function Layout({ children }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        {children}
        <Footer />
      </AuthProvider>
    </>
  );
}

export default Layout;
