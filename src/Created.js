import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Created extends Component {
	render() {
		return (
			<div>
				<h1> GROUP HAS BEEN CREATED </h1>
				<br/>
				
				<Link to='/'> Back</Link>

			</div>
		);
	}
}

export default Created

