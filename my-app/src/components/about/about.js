import React,{Component} from 'react';
import './style.css';

class About extends Component{
	constructor(props){
		super(props);
		this.state = {
			className : 'gr'
		};
		this.colorchange = this.colorchange.bind(this);
	}

	colorchange = (state) => {
		if(this.state.className ==='bl'){
			this.setState({className :'gr'})
		} else {
			this.setState({className :'bl'})
		}
	}
	

	render(){
		return (
			<div className="container">
			<div className="row">
				<h1>About page</h1>
			
				<button onClick={this.colorchange} className={this.state.className} >Change color</button>
			</div>
		</div>
		);
	}
}

export default About;