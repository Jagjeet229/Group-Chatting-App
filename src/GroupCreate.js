import React, { Component } from 'react';
import M from 'materialize-css'
import {Link} from 'react-router-dom';
import details from "./LoginDetails"
import fire from './fire';

 class GroupCreate extends Component {

 	_create(){

 		var inputBox=document.getElementById('inputBox');
 		console.log(inputBox.value)

 		var newRef=fire.database().ref('group').push().key
 		console.log(newRef)

 			fire.database().ref('group/'+newRef).set({
 						groupname:inputBox.value,
						owner:details.id,

 			})

 			var tempRef='group/'+newRef+"/members/"+details.id

 			fire.database().ref(tempRef).set({
 				memberid:details.id
 			})

 			// 	var temp=details.id
 			// 	fire.database().ref('group').push().set({
				// 		groupname:inputBox.value,
				// 		owner:details.id,
						
				// })
				
 		inputBox.value=""
 	}
	render() {
		return (
			<div>
				<h1>Create New Group</h1>
				<h4>Enter group name:</h4>
				<input id="inputBox" placeholder="Enter Group Name here"></input>
				<Link to="/creategroup/created"> <button onClick={()=>this._create()}>Create Group</button></Link>
				<br/>
				<br/>
				<Link to='/'> Back</Link>
			


				
			</div>
		);
	}
}

export default GroupCreate
