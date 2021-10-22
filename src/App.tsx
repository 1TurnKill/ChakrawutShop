import React, { Suspense, useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/index'
import Contact from './pages/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Router>
    </div>
  )
}

export default App
