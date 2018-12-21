import React, { Component } from 'react'
import './App.css'
import ExplainBindingsComponent from './Components/ExplainBindingsComponent'
const name = ['Dina', 'Love', 'Snukum']
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: '4',
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]
const newstate = ['John']
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list,
      name,
      newstate,
    }
    this.onDismiss = this.onDismiss.bind(this)
  }
  //ES5 syntax
  // onDismiss(id) {
  //   function isNotId(item) {
  //     return item.objectID !== id
  //   }
  //   const updatedList = this.state.list.filter(isNotId)
  //   this.setState({ list: updatedList })
  // }
  // onDismiss(id) {
  //   const isNotId = item => item.objectID !== id
  //   const updatedList = this.state.list.filter(isNotId)
  //   this.setState({ list: updatedList })
  // }
  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id)
    this.setState({ list: updatedList })
  }
  render() {
    // const name = ['AD Faris', 'John', 'Dina']
    // const helloworld = 'Welcome to the road to react'

    // helloworld.text = 'bye bye'
    // console.log('props', this.props)
    return (
      <div className="App">
        <ExplainBindingsComponent />
        {this.state.name.map(name =>
          <li key={name + name}>
            {name}
          </li>,
        )}
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>
                {item.title}
              </a>
            </span>

            <span>
              {item.author}
            </span>
            <span>
              {item.num_comments}
            </span>
            <span>
              {item.points}
            </span>
            <span>
              <button
                // onClick={() => this.onDismiss(item.objectID)}
                onClick={function() {
                  console.log(item.objectID)
                }}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>,
        )}
        {this.state.newstate.map(newstates =>
          <ul key={newstates + newstates}>
            {newstates}
          </ul>,
        )},
        {/* return (
          <div>
              <span>
                <a href={item.url}>
                  {' '}{item.title}
                </a>
              </span>
              <span>
                {item.author}
              </span>
              <span>
                {item.num_comments}
              </span>
              <span>
                {' '}{item.objectID}
              </span>
            </div>
          ) */}
      </div>
    )
  }
}

export default App
