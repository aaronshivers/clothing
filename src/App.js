import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import HatsPage from './pages/HatsPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/shop" exact component={ ShopPage } />
      <Route path="/shop/hats" component={ HatsPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  </Router>
)

export default App
