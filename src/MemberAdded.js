import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class MemberAdded extends Component {
	render() {
		return (
			<div>
			 <h1>New member has been added</h1>
			 <Link to='/'> Back</Link>

			</div>
		);
	}
}

export default MemberAdded
