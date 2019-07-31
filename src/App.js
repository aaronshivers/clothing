import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInPage from './pages/SignInPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/shop" exact component={ ShopPage } />
      <Route path="/signin" component={ SignInPage } />
      <Route component={ NotFoundPage } />
    </Switch>
  </Router>
)

export default App
