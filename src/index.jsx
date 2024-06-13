import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hola from './Saludo.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Hola danza='ballet' pais='peru' academia='perudance' imagen='danza1.png'/>
     <Hola danza='cueca' pais='Bolivia' academia='BoliviaMar' imagen='cueca.png'/>
     <Hola danza='cumbia' pais='Colombia' academia='SalsaKids' imagen='cumbia.png'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
