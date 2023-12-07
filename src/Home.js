import React, { Component } from 'react';
import './App.css'
import LoginButton from './LoginButton'
import details from "./LoginDetails"
import {Link} from 'react-router-dom';

import {observer} from 'mobx-react'
import M from 'materialize-css'
import Header from "./Header"
import Groups from "./Groups"


@observer
 class Home extends Component {
	render() {
		return (
			<div>
				
				{
					details.id==null?
					<div className="App">

				<img  className="imgtemp" src="https://zero1.sg/img/accountlogin-icon.png" />
				<LoginButton/>
				</div>
					

					
					
					
					:
					<div>
					<Header/>
					<br/>
					<Groups/>
					<br/>
					
					</div>

					

				}

				
			</div> 
			
		);
	}
}

export default Home;
