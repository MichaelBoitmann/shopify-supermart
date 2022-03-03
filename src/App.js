import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HomePage = () => (
  <div>
    <h1>HOME PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
