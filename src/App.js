import React, { Component } from 'react'
import './App.css'
// import cors from 'cors'

let defaultOptions = {
  url: '',
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  body: null,
}
const DEFAULT_QUERY = 'redux'

const PATH_BASE = 'https://hn.algolia.com/api'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
// const url = `${PATH_BASE} ${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`
// import ExplainBindingsComponent from './Components/ExplainBindingsComponent

function isSearched(searchTerm) {
  return function(item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }
    // this.onDismiss = this.onDismiss.bind(this)
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
  }
  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  setSearchTopStories(result) {
    this.setState({ result })
  }
  fetchSearchTopStories(searchTerm) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }
  onDismiss = id => {
    const updatedList = this.state.list.filter(item => item.objectID !== id)
    this.setState({ list: updatedList })
  }
  onSearchChange = event => {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
  }
  render() {
    const { searchTerm, result } = this.state
    if (!result) {
      return null
    }
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        <Table
          list={result.hits}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    )
  }
}
//*******************************************************************************/
const Search = ({ value, onChange, children }) =>
  // render() {
  // const { value, onChange, children } = this.props
  // return (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
// )
// }
// }
//*******************************************************************************/
const Table = ({ list, pattern, onDismiss }) =>
  // render() {
  // const { list, pattern, onDismiss } = this.props
  // return (
  <div>
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID}>
        <span>
          {' '}<a href={item.url}> {item.title} </a>{' '}
        </span>
        <span>
          {' '}{item.author}{' '}
        </span>
        <span>
          {' '}{item.num_comments}{' '}
        </span>
        <span>
          {' '}{item.points}{' '}
        </span>
        <span>
          {' '}<Button onClick={() => onDismiss(item.objectID)} type="button">
            {' '}Dismiss{' '}
          </Button>{' '}
        </span>
      </div>,
    )}
  </div>
// )
// }
// }
//**********************************************************************************/

const Button = ({ onClick, className, children }) =>
  // render() {
  // const { onClick, className = '', children } = this.props

  // return (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
// )
// }
// }

export default App
