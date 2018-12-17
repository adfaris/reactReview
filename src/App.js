import React, { Component } from 'react'
import './App.css'
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
class App extends Component {
  render() {
    // const name = ['AD Faris', 'John', 'Dina']
    // const helloworld = 'Welcome to the road to react'

    // helloworld.text = 'bye bye'
    return (
      <div className="App">
        {/* // render name */}
        {name}
        {/* // map through array and print title */}
        {list.map(function(item) {
          return (
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
          )
        })}
      </div>
    )
  }
}

export default App
