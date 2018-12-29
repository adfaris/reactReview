import React, { Component } from 'react'
import './App.css'
// import cors from 'cors'

// let defaultOptions = {
//   url: '',
//   method: 'GET',
//   mode: 'cors',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//   },
//   body: null,
// }
const DEFAULT_QUERY = 'redux'
const DEFAULT_HPP = '100'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='
const PARAM_HPP = 'hitsPerPage='
// const url = (`${PATH_BASE} ${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE})`

// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   }
// }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
    }
    // this.onDismiss = this.onDismiss.bind(this)
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this)
  }
  // import ExplainBindingsComponent from './Components/ExplainBindingsComponent

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm]
  }

  componentDidMount() {
    const { searchTerm } = this.state
    // console.log('searchTerm', searchTerm) redux
    this.setState({ searchKey: searchTerm })
    // console.log(searchKey, 'searchKey')
    this.fetchSearchTopStories(searchTerm)
  }

  setSearchTopStories(result) {
    console.log(result)
    // destruct result and take hits and page info
    const { hits, page } = result
    const { searchKey, results } = this.state

    // page 0 is new hit, if it is not new, save on the state
    // of page is not new, update the state, else save in the array
    // const oldHits = page !== 0 ? this.state.result.hits : []
    // console.log(oldHits)
    // save the old and new hits in the updated hits
    const oldHits = results && results[searchKey] ? results[searchKey].hits : []
    // console.log(results[searchKey])
    const updatedHits = [...oldHits, ...hits]
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page },
      },
    })
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    // console.log(url)
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`,
    )
      // fetch(url)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  onSearchSubmit = e => {
    e.preventDefault()
    const { searchTerm } = this.state
    this.setState({ searchKey: searchTerm })
    // if (this.needsToSearchTopStories(searchTerm)) {
    this.fetchSearchTopStories(searchTerm)
    // }
  }

  onDismiss = id => {
    // const updatedList = this.state.result.hits.filter(
    //   item => item.objectID !== id,
    // )
    // this.setState({ result: updatedList })
    const { searchKey, results } = this.state
    const { hits, page } = results[searchKey]

    const isNotID = item => item.objectID !== id
    const updatedHits = hits.filter(isNotID)
    this.setState({
      // result: Object.assign({}, this.state.result, { hits: updatedHits }),
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page },
      },
    })
  }

  onSearchChange = event => {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { searchTerm, results, searchKey } = this.state
    const page = (results && results[searchKey] && results[searchKey].page) || 0
    const list =
      (results && results[searchKey] && results[searchKey].hits) || []
    // console.log(results)
    // console.log(result)
    // if (result === null) {
    // if (!result) {
    // return null
    // }
    // console.log(result)
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>
        {results &&
          // ?
          <Table
            list={list}
            // pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        // : null
        }
        <div>
          <Button
            onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            More
          </Button>
        </div>
      </div>
    )
  }
}
//*******************************************************************************/
const Search = ({ value, onChange, onSubmit, children }) =>
  // render() {
  // const { value, onChange, children } = this.props
  // return (
  <form onSubmit={onSubmit}>
    {/* {children} */}
    <input type="text" value={value} onChange={onChange} />
    <button type="submit">
      {children}
    </button>
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
    {/* {list.filter(isSearched(pattern)).map(item => */}
    {list.map(item =>
      <div key={item.objectID + item.objectID + item.oldHits}>
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
