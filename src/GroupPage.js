import React, { Component } from 'react';
import fire from "./fire.js"
import details from "./LoginDetails"
import {observer} from 'mobx-react'; 
import './GroupPage.css'
import Header from "./Header"
import {Link} from 'react-router-dom';

@observer
class GroupPage extends Component {


    

     componentDidMount(){
     	
     	var chatBox= document.getElementById('chatBox');

     	fire.database().ref('group/'+details.curgroup+"/messages").on('child_added',function(snapshot){
	var msg=snapshot.val();
	chatBox.innerHTML +=`<p>${msg.body}- by ${msg.author}</p>`

})
     }


     _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    		var inputBox= document.getElementById('inputBox');

fire.database().ref('group/'+details.curgroup+"/messages").push().set({
	body: inputBox.value,
	author:details.use.displayName

	
})

	
inputBox.value=''
      
    }
  }




	render() {

		var id =this.props.match.params.groupid
		details.curgroup=id
		var url="/group/"+details.curgroup+"/addmembers"; 
		

	
		return (
			<div>
			<Header/>
			
			<Link to={url}><button  className="waves-effect waves-teal btn">Add People To Group</button></Link>
			

			
				<div id='chatBox'></div>
   				<input onKeyDown={this._handleKeyDown} id="inputBox" className="Box" placeholder="Type your message here and press enter" ></input>
   				
			</div>
		);
	}
}

export default GroupPage