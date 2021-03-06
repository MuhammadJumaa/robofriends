import React from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import { robots } from './robots';
import '../containers/App.css';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props
        const filterRobots =
        robots.filter(robot => {
            var searchResult = robot.name.toLowerCase().includes(searchField.toLowerCase());

            return searchResult;
        })
        var Content = null;
        if (filterRobots.length === 0&&!isPending) {
            Content = 
            (
                <CardList robots={[
                {
                    id:1,
                    name:searchField,
                    linkname:searchField,
                    Title:searchField
                    },{
                    id:1,
                    name:searchField+' '+searchField,
                    linkname:searchField+' '+searchField,
                    Title:searchField+' '+searchField
                    },{
                    id:1,
                    name:searchField+' '+searchField+' '+searchField,
                    linkname:searchField+' '+searchField+' '+searchField,
                    Title:searchField+' '+searchField+' '+searchField
                    },{
                    id:1,
                    name:searchField+' '+searchField+' '+searchField+' '+searchField,
                    linkname:searchField+' '+searchField+' '+searchField+' '+searchField,
                    Title:searchField+' '+searchField+' '+searchField+' '+searchField
                },
                ]}/>
            );
        }
        else
        Content = isPending ? "Loading...":(<CardList robots={filterRobots}/>);
        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        {Content}
                    </ErrorBoundry>
                </Scroll>
            </div>
            );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);