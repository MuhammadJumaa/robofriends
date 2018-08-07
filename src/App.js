import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './scroll';
import ErrorBoundry from './ErrorBoundry'
//import { robots } from './robots';
import './App.css';

class  App extends React.Component {
    constructor(){
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }   
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users => 
            this.setState({robots:users})
        );
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
       
    }
    render(){
         const filterRobots= this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
         if(this.state.robots.length>0)
        return (
    <div className='tc'>
        <h1 className='f1'>SKYLINE TEAM</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <ErrorBoundry>
        <CardList robots={filterRobots}/>
        </ErrorBoundry>
        </Scroll>
    </div> 
    )
    else{
        return <h1 className='tc'>Loading...</h1>;
    }
    }

}

export default App;