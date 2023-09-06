import React from 'react';
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
 constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: '',
  };
 }

 componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => this.setState(() => {
    return {monsters: users}
  }
  ));
 }
 
 onSearchChange = (event) => {
  console.log(event.target.value);
  const searchField = event.target.value.toLowerCase();
   this.setState(() => {
    return {searchField};
   });
}

  render() {
    
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
      });
    
    return (
      <div className="App">
       <h1 className="app-title">Monsters Rolodex</h1>

       <SearchBox 
       onChangeHandler={onSearchChange} 
       placeholder='Search Monsters' 
       className='monstes-search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
