import React from 'react'

class Search extends React.Component() {
  constructor() {
    super()
    this.state{
      searchTerm:'',
    }
  }
  onSearchChange = event =>{
    event.preventDefault()
    this.setState({searchTerm: event.target.value})
  }
  render(){
    return(
      <div className="App">
      <form>
        <input
        type="text"
        value={searchTerm}
        onChange={this.onSearchChange}
        />
      </form>

      </div>
    )
  }
}
