
import './App.css';
import React, { Component } from 'react';

import CharacterContainer from './components/CharacterContainer';

const baseURL = "https://rickandmortyapi.com/api/character"

class App extends Component {

  state = {
    characters: [],
    search: '',
    select: 'all'
  }

  componentDidMount(){
    fetch(baseURL)
    .then(response => response.json())
    .then(result => this.setState({ characters: result.results }))
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }
  
  filteredCharacters = () => {
    return this.state.characters.filter(character => {
      if (!this.state.search) {
        return this.state.characters
      } else {
        return character.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
    }).filter(character => {
        if(this.state.select === 'all'){
          return character
        } else {
          return character.location.name === this.state.select
        }
      })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
          <CharacterContainer 
            filteredCharacters={ this.filteredCharacters() } 
            handleChange={this.handleChange} 
            allCharacters={ this.state.characters } 
          />
      </div>
    );

  }

}

export default App;
