import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry'
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
         const filterRobots= 
         robots.filter(robot => {
            var searchResult= robot.name.toLowerCase().includes(searchfield.toLowerCase()); 

            return searchResult;
        })      

if(filterRobots.length===0){
     return !robots.length ?  <h1 className='tc'>Loading...</h1> :( 
    <div className='tc'>
        <h1 className='f1'>SKYLINE TEAM</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
        <Scroll>
        <CardList robots={[
       
       {
        id:1,
        name:searchfield,
        linkname:searchfield,
        Title:searchfield
        },{
        id:1,
        name:searchfield+' '+searchfield,
        linkname:searchfield+' '+searchfield,
        Title:searchfield+' '+searchfield
        },{
        id:1,
        name:searchfield+' '+searchfield+' '+searchfield,
        linkname:searchfield+' '+searchfield+' '+searchfield,
        Title:searchfield+' '+searchfield+' '+searchfield
        },{
        id:1,
        name:searchfield+' '+searchfield+' '+searchfield+' '+searchfield,
        linkname:searchfield+' '+searchfield+' '+searchfield+' '+searchfield,
        Title:searchfield+' '+searchfield+' '+searchfield+' '+searchfield
        },
    ]}/>
        </Scroll>
        </ErrorBoundry>
    </div> 
    ) ;
}
        return !robots.length ?  <h1 className='tc'>Loading...</h1> :( 
    <div className='tc'>
        <h1 className='f1'>SKYLINE TEAM</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
        <Scroll>
        <CardList robots={filterRobots}/>
        </Scroll>
        </ErrorBoundry>
    </div> 
    ) ;
    
    }

}

export default App;