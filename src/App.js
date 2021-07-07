import './App.css';
import React from 'react';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/search-box/search-box.component";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'monsters':[],
            'searchField':''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({'monsters':json}))
    }

    render() {
        const {monsters, searchField} = this.state;
        let filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField)
        );
        return  (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monster'
                handleChange = {e => this.setState({searchField: e.target.value})} />
                <CardList monsters={filteredMonsters}/>
            </div>

        );
    }
}

export default App;
