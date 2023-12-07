import React, { Component } from 'react';
import fire from "./fire"
import firebase from "firebase"
import details from "./LoginDetails"

 class ScriptHeader extends Component {

 	componentDidMount(){

 		firebase.auth().onAuthStateChanged(user=> {
		  if (user) {
		  	//details.setUser(user)
		     details.use=user
		     details.log=true
		    
		
     fire.database().ref('users').orderByChild('Email').equalTo(user.email).on("value", (snapshot)=> {

    //console.log(snapshot.val());
    if(snapshot.val()==null){
    	
    	fire.database().ref('users').push().set({
	              Name:user.displayName,
	              Email:user.email,
	              
	             


                      })
    }
    

    snapshot.forEach(function(data) {
    	
    	//details.setId(data.key)
    	details.id=data.key
    	
    	console.log(details.id)
    	
    	 
    	
        
    });
    });

    
   
    
		  } else {
		    	//details.unsetUser()

		    
		             
		  }
});
    	
 	}

	render() {
		return (
			<div></div>
		);
	}
}

export default ScriptHeader
