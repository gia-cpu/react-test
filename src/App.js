import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  filterMonsters() {
    return this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
  }
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {
      this.setState({
        monsters: response
      })
    })
  }
  render() {
    
    return (
      <div className="App">
        <SearchBox 
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={this.filterMonsters()} />
      </div>
    )
  }
}

export default App;
