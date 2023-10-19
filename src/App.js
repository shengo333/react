// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={MainPage} />
      </Routes>
    </Router>
  );
}

export default App;
