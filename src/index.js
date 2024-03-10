import React from 'react';
import ReactDOM from 'react-dom/client';
const App = require('./App')
const {BrowserRouter} = require('react-router-dom')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

