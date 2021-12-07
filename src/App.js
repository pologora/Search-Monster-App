import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'


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
        <h1>Monsters Rolodex</h1>
        <SearchBox onChangeSearchHandle={this.onChangeSearchHandle}
          value={this.state.searchField}
          placeholder={'search monsters'}
        />
        <CardList monsters={filteredMonsters} />

      </>
    )
  }
}
export default App;
