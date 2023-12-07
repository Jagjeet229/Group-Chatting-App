import React, { Component } from 'react';
import details from "./LoginDetails"
import fire from "./fire"
import {observer} from 'mobx-react'
import Header from "./Header"
import {Link} from 'react-router-dom';


@observer
 class AddMembers extends Component {

 	state={

	render:false
}


 	componentDidMount(){
    console.log('component Mounted')
    
    fire.database().ref('users').on("value", (snapshot)=> {
    	details.alluser=[]
    	
       //console.log(snapshot.val())
       snapshot.forEach((data)=> {
      
      
      
     
      var temp={
        id:data.key,
        name:data.val().Name

      }
      console.log("member")


      fire.database().ref('group/'+details.curgroup+"/members").orderByChild('memberid').equalTo(temp.id).on('value',(snapshot)=>{
      	console.log("find members")
      	console.log(snapshot.val())

      	if(snapshot.val()==null){
      		 details.alluser.push(temp)
      	}
      })
      
       //details.alluser.push(temp)
       
       //console.log(temp)

    })
       

  })
    
    }

    click=(val)=>{
    	
    	console.log(val)

    	fire.database().ref('group/'+details.curgroup+"/members/"+val).set({
    		memberid:val
    	})
    	this.setState({
    		false:!this.state.false
    	})
    }


	render() {

		//console.log(details.curgroup)
		
		return (

			<div>
			<Header/>
			<br/>
			<br/>
				{
					(details.alluser)?

					details.alluser.map((v,i)=>{
						return  <div key={i}>
							<Link to='/added'><button className="waves-effect waves-teal btn"  onClick={()=>this.click(details.alluser[i].id)}>
									
										    {details.alluser[i].name}
										  
									

								</button> </Link>
								<br/>
								<br/>
								<br/>
								</div>

					})
					:
					console.log("null")

				}
				<br/>
				<br/>
				<Link to='/'> Back</Link>

			</div>
		);
	}
}

export default AddMembers
