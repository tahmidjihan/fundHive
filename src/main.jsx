import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AuthPanel from './Components/AuthPanel.jsx';
import Err from './Pages/err.jsx';
import Campaigns from './Pages/Campaigns';
import Campaign from './Pages/Campaign.jsx';
import MyCampaigns from './Pages/MyCampaigns.jsx';
import MyDonations from './Pages/MyDonations.jsx';
import AddCampaign from './Pages/UpdateCampaign.jsx';
import UpdateCampaign from './Pages/UpdateCampaign.jsx';

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
        <Route
          path='/campaigns'
          element={
            <>
              <Navbar />
              <Campaigns></Campaigns>
              <Footer />
            </>
          }
        />
        <Route
          path='/campaign/:id'
          element={
            <>
              <Navbar />
              <Campaign />
              <Footer />
            </>
          }
        />
        <Route
          path='/MyCampaigns'
          element={
            <>
              <Navbar />
              <MyCampaigns />
              <Footer />
            </>
          }
        />
        <Route
          path='/MyDonations'
          element={
            <>
              <Navbar />
              <MyDonations />
              <Footer />
            </>
          }
        />
        <Route
          path='/addCampaign'
          element={
            <>
              <Navbar />
              <AddCampaign />
              <Footer />
            </>
          }
        />
        <Route
          path='/UpdateCampaign/:id'
          element={
            <>
              <Navbar />
              <UpdateCampaign />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
