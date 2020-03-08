import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Signup from './login';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null
		};
	}

	changeHandle = (e) => {
		// console.log(e.target.value)
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = (e) => {
		fetch('https://uitedemo.herokuapp.com/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: `${this.state.firstName}` + `${this.state.lastName}`,
				email: `${this.state.email}`,
				password: `${this.state.password}`
			})
		})
			.then((response) =>{
                if(response.status === 200)
                this.props.history.push('/')
                else
                alert("Status: ",response.status)
            } )
	};

	render() {
		return (
			<div style={{width:400}}>
				{/* <form onSubmit={this.handleSubmit}> */}
				<h3>Sign Up</h3>

				<div className="form-group">
					<label>First name</label>
					<input
						type="text"
						className="form-control"
						placeholder="First name"
						id="firstName"
						onChange={this.changeHandle}
					/>
				</div>

				<div className="form-group">
					<label>Last name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Last name"
						id="lastName"
						onChange={this.changeHandle}
					/>
				</div>

				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						id="email"
						onChange={this.changeHandle}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						id="password"
						onChange={this.changeHandle}
					/>
				</div>

				<button
					className="btn btn-primary btn-block"
					onClick={this.handleSubmit}
				>
					Sign Up
				</button>
				<p className="forgot-password text-right">
					Already registered <a href="#">sign in?</a>
				</p>
				{/* </form> */}
                <button>
                    
                    <Link to="/" >
                    Sign In
                    </Link>
                </button>
			</div>
		);
	}
}