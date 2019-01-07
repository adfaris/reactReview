import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './Components/AppRouter'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)
// ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if (module.hot) {
  module.hot.accept()
}
serviceWorker.unregister()
