import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SignIn } from './components/authentication/SignIn';
import { SignUp } from './components/authentication/SignUp';
import { Site } from './components/Site/Site';
import { ResetPassword } from './components/authentication/ResetPassword';
import { Hotels } from './components/Site/Hotels';
import { Restaurants } from './components/Site/Restaurants';
import {ThingsToDo } from './components/Site/ThingsToDo';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Site" element={<Site />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/Site/Hotels" element={<Hotels />} />
      <Route path="/Site/Restaurants" element={<Restaurants />} />
      <Route path="/Site/ThingsToDo" element={<ThingsToDo />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);

