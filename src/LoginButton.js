import React, { Component } from 'react';

import fire from './fire';
import firebase from 'firebase'
import details from "./LoginDetails"
import M from 'materialize-css'
import * as actions from './actions'


 class LoginButton extends Component {

 
    componentDidMount(){


    	actions.setAuthListener()
    	

 	}


   _signOut(){
   	firebase.auth().signOut().then(function() {
   		details.log=false
   		details.user=null
   		details.id=null
   		
		  //console.log("Signed Out")
		}).catch(function(error) {
		  //console.log("Could not sign out")
		});
   }
      
  
	render() {
		
		
		return (
			<div>
				     
				     
				     	{
				     		details.log==false?

							<button onClick={()=>{actions.login()}}>Sign In</button>
							:
							<a className="waves-effect waves-teal btn-flat"onClick={()=>this._signOut()} >Sign Out</a>

						}	
				
			</div>
		);
	}
}

export default LoginButton;