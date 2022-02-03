import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App2 } from './App2';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { SignIn } from './components/authentication/SignIn';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/2" element={<App2 />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

