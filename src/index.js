import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SignIn } from './components/authentication/SignIn';
import { SignUp } from './components/authentication/SignUp';
import { Site } from './components/Site/Site';
import { ResetPassword } from './components/authentication/ResetPassword';
import { Hotels } from './components/Site/Hotels'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Site" element={<Site />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/Site/Hotels" element={<Hotels />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);

