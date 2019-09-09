import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/styles.scss'
import App from './App'

const appProvider = (
  <Provider>
    <App />
  </Provider>
)

ReactDOM.render(appProvider, document.getElementById('root'))
