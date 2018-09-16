import React , {Component} from 'react';
import CounterBtn from './CounterBtn';

class Header extends Component{
	shouldComponentUpdate(nextProps,nextState){
		return false;
	}
	render(){
		console.log('header');

		return (
<div>	
	<h1 className='f1'>SKYLINE TEAM</h1>
	<CounterBtn color={'red'} />
</div>
			) ;
	}
}
export default Header;