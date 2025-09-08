import React from 'react';
import ReactDOM from 'react-dom/client';
import { FronteggProvider } from '@frontegg/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const contextOptions = {
  baseUrl: 'https://app-grkb95gt40d2.frontegg.com',
  clientId: '8a6a896a-f550-4853-97a2-5d79969cd9d3',
  appId: 'd52557bd-5aa0-4adb-a090-4afd4c9284f4'
};

const authOptions = {
  keepSessionAlive: true
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/oauth/callback" element={<App />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </FronteggProvider>
  </React.StrictMode>
);
