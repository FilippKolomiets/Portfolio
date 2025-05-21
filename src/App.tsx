import React, { FC, useState, useEffect } from 'react';
import Header    from './components/Header';
import Preloader from './components/Preloader';
import Hero      from './components/Hero';
import Skills    from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer    from './components/Footer';
import initApp   from './utils/initApp';
import './index.css';

const App: FC = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setIsLight(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <Header
        isLight={isLight}
        onToggle={() => setIsLight(l => !l)}
      />
      <Preloader />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Footer isLight={isLight} />
      </main>
    </>
  );
};

export default App;
