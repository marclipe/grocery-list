import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router'
import './global.scss'

export function App() {
  return (
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  );
}
