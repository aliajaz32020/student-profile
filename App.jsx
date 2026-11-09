import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Header />
      <hr style={{ margin: '2rem 0' }} />
      <About />
      <Projects />
    </div>
  );
}

export default App;