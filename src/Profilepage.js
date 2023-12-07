import React, { Component } from 'react';
import details from "./LoginDetails"
import {Link} from 'react-router-dom';
import Header from "./Header"
import * as actions from './actions'
import {observer} from 'mobx-react'


@observer

 class Profilepage extends Component {
 	componentDidMount(){


    	actions.setAuthListener()
    	

 	}
 	
	render() {
		console.log("Profile page loaded")
		console.log(details.log)
		return (

			<div>
				
				<Header/>
				<h1>Details</h1>
				<br/>
				<img src={details.use.photoURL}  width={45} height={45}/>
				<br/>
				<h3>Name-{details.use.displayName}</h3>
				<br/>
				<h3>Email-{details.use.email}</h3>
				<br/>
				<Link to='/'> Back</Link>

			</div>
		);
	}
}

export default Profilepage
