import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import { auth, createUserProfileDocument } from './db/firebase'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })

    return () => unsubscribeFromAuth()
  }, [])

  useEffect(() => console.log(currentUser), [currentUser])

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
