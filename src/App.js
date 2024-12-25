import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import App2 from './App2';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<App2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;