import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
