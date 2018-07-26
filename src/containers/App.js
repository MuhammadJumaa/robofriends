import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
//import { robots } from './robots';
import '../containers/App.css';

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
        const{robots,searchfield}=this.state;
         const filterRobots= robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?  <h1 className='tc'>Loading...</h1> :( 
    <div className='tc'>
        <h1 className='f1'>SKYLINE TEAM</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <CardList robots={filterRobots}/>
        </Scroll>
    </div> 
    ) ;
    
    }

}

export default App;