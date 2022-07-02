import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar"
import { Button } from "./components/button/Button"
import { Box1 } from './components/box1/Box1';
import { Box2 } from './components/box2/Box2';
import { Box3 } from './components/box3/Box3';
import { Box4 } from './components/box4(grid)/Box4';
import { Box5 } from './components/box5(dark)/Box5';
import { Box6 } from './components/box6(dark)/Box6';
import { Box7 } from './components/box7(white)/Box7';
const App = () => {

  return (
    <div className="container">
      <Navbar/>
      <Button/>
      <Box1/>
      <Box2/>
      <Box3/>
      <Box4/>
      <Box5/>
      <Box6/>
      <Box7/>
    </div>
  );
}

export default App;
