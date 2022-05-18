import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import WaveEffect from './components/waveEffect/WaveEffect';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';


const App: React.FC = () => {
  return (
    <div className="App">
        <WaveEffect />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
