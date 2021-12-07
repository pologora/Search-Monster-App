import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'

class App extends Component {
  constructor() {
    super()


    this.state = {
      monsters: [],
      searchField: "",

    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onChangeSearchHandle = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })

    return (
      <>
        <input
          type="search"
          placeholder="search monsters"
          onChange={this.onChangeSearchHandle}
          value={this.state.searchField}
        />

        <CardList monsters={filteredMonsters} />

      </>
    )
  }
}
export default App;
