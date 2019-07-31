import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HatsPage from './pages/HatsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/shop/hats" component={ HatsPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  </Router>
)

export default App
