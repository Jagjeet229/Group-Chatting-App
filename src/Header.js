import React,{Component} from 'react';
import M from 'materialize-css'
import details from "./LoginDetails"
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react'
import LoginButton from './LoginButton'

import LogOut from "./LogOut"

@observer

 class Header extends Component {
 	
	render() {
		var url="/profile/"+details.id; 

		
		return (
			<div>
				<nav>
			    <div className="nav-wrapper">
			    	{details.log?
			    		<h6 className="brand-logo">Logged in as- {details.use.displayName}</h6>
			    		:
			    		null
			    	}
			      
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			      <li><Link to="/creategroup" className="waves-effect waves-teal btn-flat">+</Link></li>
				  <li><LoginButton/></li>
				  {details.log?
				  	 <li><Link to={url}> <img src={details.use.photoURL}  width={45} height={45}/></Link></li>

				  		:
				  		null
				  }
			      



			      </ul>
			    </div>			
                </nav>
			</div>
		);
	}
}

export default Header;
