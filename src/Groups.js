import React, { Component } from 'react';
import details from "./LoginDetails"
import fire from "./fire"
import {observer} from 'mobx-react'
import './App.css'
import {Link} from 'react-router-dom';

@observer



 class Groups extends Component {



    

  componentDidMount(){
    console.log('component Mounted')

    fire.database().ref('group').on("value",(snapshot)=>{
          details.allgroup=[]
     
      snapshot.forEach((data)=>{
          var temp=data.val()
          var key=data.key

         fire.database().ref('group/'+data.key+"/members").orderByChild('memberid').equalTo(details.id).on("value",(snapshot)=>{
          console.log("inside group")
          console.log(temp)

          console.log(snapshot.val())

          if(snapshot.val()!=null){

             var nunu={
                  id:key,
                  groupname:temp.groupname

                }
                console.log("groupinfo")
                console.log(nunu)
                 details.allgroup.push(nunu)
                 

          }



        })
        
      })
      
    })













//haha

//    console.log(details.curgroup)
//     fire.database().ref('group/members').orderByChild('memberid').equalTo(details.id).on("value", (snapshot)=> {
//       console.log('init')
//       console.log(snapshot.val())
//         details.allgroup=[]
    
   
//     snapshot.forEach((data)=> {
      
//       console.log('outit')
//       console.log(snapshot.val())
      
     
//       var nunu={
//         id:data.key,
//         groupname:data.val().groupname

//       }
//       console.log("groupinfo")
//       console.log(nunu)
//        details.allgroup.push(nunu)
       
       
      

      
//     });
   
// //console.log(details.allgroup)
    

    
  
//     });
    
    
     



  }


 

  
  render() {
    console.log("render")

    return (
      <div>                  

                       
                          {
                            
                            (details.allgroup) ?

                            details.allgroup.map(function(v,i){
                              console.log(url)
                              var url="/group/"+details.allgroup[i].id
                              console.log(url)
                              return<div key={i}> 
                              <Link to={url}>{details.allgroup[i].groupname}</Link>
                              <br/>
                              </div>


                            })
                            :
                              console.log("null")


                            
                            
                          }
                        
      </div>
    );
  }
}

export default Groups
