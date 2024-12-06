import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home.jsx';

import AuthPanel from './Components/AuthPanel.jsx';
import Err from './Pages/err.jsx';
import Campaigns from './Pages/Campaigns.jsx';
import Campaign from './Pages/Campaign.jsx';
import MyCampaigns from './Pages/MyCampaigns.jsx';
import MyDonations from './Pages/MyDonations.jsx';
import AddCampaign from './Pages/UpdateCampaign.jsx';
import UpdateCampaign from './Pages/UpdateCampaign.jsx';
import Layout from './Layout.jsx';
function RouteProvider() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Err />} />
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/login'
            element={
              <Layout>
                <AuthPanel login={true} />
              </Layout>
            }
          />
          <Route
            path='/register'
            element={
              <Layout>
                <AuthPanel login={false} />
              </Layout>
            }
          />
          <Route
            path='/campaigns'
            element={
              <Layout>
                <Campaigns />
              </Layout>
            }
          />
          <Route
            path='/campaign/:id'
            element={
              <Layout>
                <Campaign />
              </Layout>
            }
          />
          <Route
            path='/MyCampaigns'
            element={
              <Layout>
                <MyCampaigns />
              </Layout>
            }
          />
          <Route
            path='/MyDonations'
            element={
              <Layout>
                <MyDonations />
              </Layout>
            }
          />
          <Route
            path='/addCampaign'
            element={
              <Layout>
                <AddCampaign />
              </Layout>
            }
          />
          <Route
            path='/UpdateCampaign/:id'
            element={
              <Layout>
                <UpdateCampaign />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouteProvider;
