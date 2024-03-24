import './App.css';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Images from './components/Images';
import { gsap } from 'gsap';

function App() {
  let tl = gsap.timeline();
  let ease = "power4.out";
  return (
    <div className="hero">
      <Header tl={tl} ease={ease} />
      <div className="container">
        <Content tl = {tl} />
        <Images tl = {tl} ease = {ease} />
      </div>
    </div>
  );
}

export default App;
