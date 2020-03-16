import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Mode from './components/Mode';
import Board from './components/Board';

import './App.scss';


function App() {
  return (
   <div className="App">
    <Router>
      <Route exact path="/" component={ Mode } />
      <Route path="/play" component= { Board }/>
    </Router>
   </div>
  );
}

export default App;
