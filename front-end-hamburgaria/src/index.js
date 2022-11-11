import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './router';
import GlobalEstilo from './style/styliGlobal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalEstilo/>
    <Routes/>
  </React.StrictMode>
);


