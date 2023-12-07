
import React,{Component} from 'react'
import M from 'materialize-css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import 'materialize-css/dist/css/materialize.min.css'
import Profilepage from "./Profilepage"
import GroupCreate from "./GroupCreate"
import Created from "./Created"
import GroupPage from "./GroupPage"
import AddMembers from "./AddMembers"
import MemberAdded from "./MemberAdded"



 class App extends Component {
	render() {
		return (
			<Router>
			<Switch>

			<Route exact path='/' component={Home}/>
			<Route exact path='/creategroup' component={GroupCreate}/>
			<Route exact path='/creategroup/created' component={Created}/>
			<Route exact path='/group/:groupid' component={GroupPage}/>
			<Route exact path='/group/:groupid/addmembers' component={AddMembers}/>
			<Route exact path='/added' component={MemberAdded}/>
			<Route exact path='/profile/:id' component={Profilepage}/>
			</Switch>
			</Router>
		);
	}
}


export default App;