import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsCharacters: []
    };
  }

  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsCharacters: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="app-div">
        <header className="app-header">
          <h1 className="app-title">React Wars</h1>
          <h2 className="app-subTitle">May the 4th be with you!</h2>
        </header>
        <CharacterList results={this.state.starwarsCharacters} />
      </div>
    );
  }
}

export default App;