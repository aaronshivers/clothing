import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import './styles/styles.scss'

const appProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(appProvider, document.getElementById('root'))
