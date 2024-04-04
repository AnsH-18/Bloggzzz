// Landinglayout.js
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import  Home  from './HomeLayout.jsx';
import About from './About.jsx'; // Make sure to import the About component
import { useAuth } from './AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

export default function Landinglayout() {
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  currentUser ? navigate(`/${currentUser.uid}`): null
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}
