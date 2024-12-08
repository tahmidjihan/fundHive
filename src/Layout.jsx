import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthProvider from './AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PropagateLoader } from 'react-spinners';

function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        {loading ? (
          <div className='flex justify-center items-center h-screen'>
            <PropagateLoader color='#de9b00' size={25} />
          </div>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </AuthProvider>
    </>
  );
}

export default Layout;
