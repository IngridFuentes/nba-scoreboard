import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions';



class Search extends Component {
  
  state = {
    query: '',
    results: [],
    
  };

  handleSubmit = event => {
    event.preventDefault()
}


  getInfo = () => {
    axios.get(`http://localhost:3001/api/games`)
    .then(data => {
      this.setState({
        results: data.data
      })
      // , () => console.log(this.state.results))
    })
  }
  

      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
          } else if (!this.state.query) {
          }
        })
      }

  // 
  render() {
    const filteredData = this.state.results.filter(result => {
      return this.state.query ? result.homeTeam.toLowerCase().includes(this.state.query.toLowerCase()) : true
    })
    return (
      <div> 
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search for team"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
  
        <Suggestions results={this.state.results} query={filteredData}/>
        
      </form>
    
    
     </div>
      
    )
    
  }
}


export default Search;

