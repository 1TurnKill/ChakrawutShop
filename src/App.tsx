import React, { Suspense, useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/index'
import Contact from './pages/contact'
import News from './pages/news'
import Products from './pages/products'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/news"><News /></Route>
          <Route exact path="/products"><Products /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
