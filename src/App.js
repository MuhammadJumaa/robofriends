import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class  App extends React.Component {
    constructor(){
        super()
        this.state= {
            robots: robots,
            searchfield: ''
        }   
    }
    onSearchChange(event){
        console.log();
    }
    render(){
        return (
    <div className='tc'>
    <h1 className='tc '>SKYLINE TEAM</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots}/>
    </div>
    )
    }

}

export default App;