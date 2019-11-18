import React,{Suspense, lazy, Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Loading from '../components/loading/loading.js';
import logo from '../asets/1.jpg';

import './style.css';

const Home     =  React.lazy(()=>import('../components/home/home.js'));
const Post     =  React.lazy(()=>import('../components/posts/posts.js'));
const About    =  React.lazy(()=>import('../components/about/about.js'));
const Contact  =  React.lazy(()=>import('../components/contact/contact.js'));
const Projects =  React.lazy(()=>import('../components/projects/projects.js'));


class ActiveNav extends Component {
	constructor(props){
		super(props);		
		this.handleCheck = this.handleCheck.bind(this);
		this.state = {
			selectedItem: 'item-link',
		};
	}

	handleCheck(event) {
	    this.setState({ selectedItem: event.currentTarget.dataset.id });
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light d-flex flex-row w-100 justify-content-between pl-lg-0 pr-lg-0 ">
			  <a className="navbar-brand  d-block d-lg-none" href="/home"><img src={logo} alt="logo" className="nav-logo-img img-fluid" /></a>
			  <button className="navbar-toggler border-danger form-controls" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className=""><i class="fas fa-caret-down"></i></span>
			  </button>

			 <div class="collapse navbar-collapse d-lg-flex flex-lg-row justify-content-lg-center" id="navbarSupportedContent">
			<ul className="navbar-nav flex-column flex-sm-column flex-md-column  flex-lg-row flex-xl-row d-flex flex-wrap pl-0 nav-ul text-center">
	            <li className="mr-xl-3 ul-item p-1 ">
	              <Link 
	              	to="/home" 
	              	data-id="1"  
	              	aria-disabled="true" 
	              	className={this.state.selectedItem === 1 ? 'item-link-active' : 'item-link'} 
	              	onClick={this.handleCheck}
	              >Home</Link>
	            </li>
	            <li className="mr-xl-3 ul-item p-1 ">
	              <Link 
	              	to="/about" 
	             	data-id="2" 
	              	className={this.state.selectedItem === 2 ? 'item-link-active' : 'item-link'} 
	              	onClick={this.handleCheck}
	              >About</Link>
	            </li>
	            <li className="m-xl-1 ul-item p-1 ">
	              <Link 
	              	to="/contact" 
	              	data-id="3" 
	              	className={this.state.selectedItem === 3 ? 'item-link-active' : 'item-link'} 
	              	onClick={this.handleCheck}
	              >Contact</Link>
	            </li>
	            <li className="m-xl-1 ul-item d-none d-lg-block p-1  ">
	              <Link 
	              	to="/about" 
	              	 
	              	// className={this.state.selectedItem === 3 ? 'item-link-active' : 'item-link'} 
	              	// onClick={this.handleCheck}
	              ><img src={logo} alt="logo" className="item-link-logo img-fluid" /></Link>
	            </li>
	            <li className="ml-xl-3 ul-item p-1 ">
	              <Link 
	              	to="/post" 
	              	data-id="4" 
	              	className={this.state.selectedItem ===4 ? 'item-link-active' : 'item-link'} 
	              	onClick={this.handleCheck}
	              >Post</Link>
	            </li>
	            <li className="ml-xl-3 ul-item p-1 ">
	              <Link 
	              	to="/projects" 
	              	data-id="5" 
	              	className={this.state.selectedItem === 5 ? 'item-link-active' : 'item-link'} 
	              	onClick={this.handleCheck}
	              	>Projects</Link>
	            </li>
	            <li className=" ml-xl-3 ul-item p-1 ">
	              <Link 
	              	to="/projects" 
	              	data-id="5" 
	              	className={this.state.selectedItem === 5 ? 'item-link-active' : 'item-link'} 
	              	onClick={this.handleCheck}
	              	>Projects</Link>
	            </li>
	        </ul>
	        </div>
	        </nav>
		)
	}
}


function MyRouter() {
		return (
		<Router>
			<div className="container">
				<div className="row justify-content-center">
					
			          <ActiveNav/>
			        
					<Suspense fallback={<Loading/>}>			
						<Switch>
							<Route path='/home'>
								<Home/>
							</Route>
							<Route path='/about'>
								<About/>
							</Route>
							<Route path='/contact'>
								<Contact/>
							</Route>
							<Route path='/post'>
								<Post/>
							</Route>
							<Route path='/projects'>
								<Projects/>
							</Route>
						</Switch>
					</Suspense>
				</div>
			</div>
		</Router>
	)
};

export default MyRouter;