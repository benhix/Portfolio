import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
