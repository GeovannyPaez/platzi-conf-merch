import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFount from '../containers/NotFount';
import Layout from '../components/Layout';
import { AppContextProvider } from '../context/AppContext';
import '../styles/App.css';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/info" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment/>} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
