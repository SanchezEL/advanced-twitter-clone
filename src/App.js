import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './NavComponent'
import LeftComponent from './LeftComponent'
import MiddleComponent from './MiddleComponent'
import RightComponent from './RightComponent'

function App(){
   return (
    <div className="container">
      <NavComponent />
      <LeftComponent />
      <MiddleComponent />
      <RightComponent />
    </div>
  );
 }
export default App;
