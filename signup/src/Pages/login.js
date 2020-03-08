import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";


export default class Login extends Component {
    state = {
        users: [],
        email: '',
        password: ''

    }
    handleEmailField = (e) => {
        this.setState({ email: e.target.value })
        console.log(e.target.value)
    }
    handlePasswordField = (e) => {
        this.setState({ password: e.target.value })
        console.log(e.target.value)
    }
    handleSumbit = () => {
        console.log("hell")
        const data = { email: this.state.email, password: this.state.password }
        console.log(data)
        const url = 'https://uitedemo.herokuapp.com/auth/signin';
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email: `${this.state.email}`,
                password: `${this.state.password}`
            })
        })
        .then(resposne => resposne.json())
        .then(data=>{
            if(data.data.token)
            {
                console.log(data)
                localStorage.setItem("token",data.data.token)
                // this.props.push('/');
            }
            console.log(data)
        
        })
    }
    render() {
        return (
            <div style={{width:400}} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleEmailField} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePasswordField} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={() => this.handleSumbit()} className="btn btn-primary btn-block">Submit</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                <button>
                    
                    <Link to="/signup" >
                    Sign Up
                    </Link>
                </button>
            </div>
        );

    }
}