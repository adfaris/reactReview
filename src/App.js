import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    // const name = ['AD Faris', 'John', 'Dina']
    const helloworld = 'Welcome to the road to react'

    // helloworld.text = 'bye bye'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>
              Welcome {helloworld}
            </h1>
          </p>
        </header>
      </div>
    )
  }
}

export default App
