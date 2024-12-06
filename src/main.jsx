import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouteProvider from './RouteProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteProvider></RouteProvider>
  </StrictMode>
);
