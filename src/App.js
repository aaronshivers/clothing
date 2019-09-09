import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import SignInPage from './pages/sign-in-page/sign-in-page.component'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './db/firebase'

const App = ({setCurrentUser}) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
        // setCurrentUser(userAuth)
    })

    return () => unsubscribeFromAuth()
  })

  return (
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
