import React from 'react';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills.jsx';
import Work from './Components/Work.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
