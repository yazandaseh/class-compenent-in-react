import React from 'react';
import {useState, useEffect} from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]); 
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
      });

      setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
     }
  
  return(
  <div className="App">
  <h1 className="app-title">Monsters Rolodex</h1>
  
  <SearchBox 
  onChangeHandler={onSearchChange} 
  placeholder='Search Monsters' 
  className='monster-search-box'/>
 
<CardList monsters={filteredMonsters}/> 
 </div>
 )
}
{/*class App extends Component {
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
} */}

export default App;
