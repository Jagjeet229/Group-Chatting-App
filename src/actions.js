import fire from './fire';
import firebase from 'firebase'
import details from "./LoginDetails"
import {observable,action,computed} from 'mobx'



export function login(){
	fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
   return loginHelper()
  })
  .catch(function(error) {
    console.log(error)
  });
}

 function loginHelper(){
		var provider=new firebase.auth.GoogleAuthProvider();
		var promise=fire.auth().signInWithPopup(provider).then(function(result) {
	  var user = result.user;
	  //createUserIfNotExists(user)
	}).catch(function(error) {
	  console.log(error)
	});
	return promise
}




export function setAuthListener(){

	firebase.auth().onAuthStateChanged(user=> {
		  if (user) {
		  	details.setUser(user)
		    // details.use=user
		    // details.log=true
		    
		
     fire.database().ref('users').orderByChild('Email').equalTo(user.email).on("value", (snapshot)=> {

    //console.log(snapshot.val());
    if(snapshot.val()==null){
    	
    	fire.database().ref('users').push().set({
	              Name:user.displayName,
	              Email:user.email,
	              
	             


                      })
    }
    

    snapshot.forEach(function(data) {
    	
    	details.setId(data.key)
    	//details.id=data.key
    	
    	//console.log(details.id)
    	
    	 
    	
        
    });
    });

    
   
    
		  } else {
		    	details.unsetUser()
		    
		             
		  }
});
    	
}