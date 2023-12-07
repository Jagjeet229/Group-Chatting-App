import {observable,action,computed} from 'mobx';

import M from 'materialize-css'

class LoginDetails {
  
  @observable log=false
  @observable use=null
  @observable id=null
  @observable curgroup=null
  @observable curgroupname=null
  @observable allgroup=[]
  @observable alluser=[]

  @action setUser(userinfo){

  	this.use=userinfo
  	this.log=true
  }
  @action setId(val){
  	this.id=val
  }
  @action unsetUser(){

  			this.use=null
		    this.id=null
		    this.log=false
  }


}



const details=new LoginDetails();

export default details