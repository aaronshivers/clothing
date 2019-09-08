import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInPage from './pages/SignInPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import { auth } from './db/firebase'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState('')

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return () => unsubscribeFromAuth()
  })

  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/shop" exact component={ ShopPage } />
        <Route path="/signin" component={ SignInPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </Router>
  )
}

export default App
