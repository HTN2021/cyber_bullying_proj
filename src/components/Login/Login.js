import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import {LoginError} from './LoginError';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginEmail:'',
            loginPassword: '',
            signupEmail: '',
            signupPassword: '',
            passwordCorrect: 'correct',
        }
    }

    // updates state on change
    handleChange = (e) => {
        switch(e.target.id) {
            case "loginemail" : this.setState({
                loginEmail: e.target.value,
            });break;
            case "loginpass" : this.setState({
                loginPassword: e.target.value,
            }); break;
            case "signupemail" : this.setState({
                signupEmail: e.target.value,
            }); break;
            case "signuppass" : this.setState({
                signupPassword: e.target.value,
            }); break;
        }
    }
 
    // minimum 1 capital, lower and numerical char
    validatePassword = (password) => {
        if (/[A-Z]/g.test(password) == true && /\d/g.test(password) == true && /[a-z]/g.test(password) == true && (password.length >= 8)) {
            return true;
        }
        else {
            return false;
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        // needs to be connected to backend by passing email and password
        if (e.target.id === 'login') {
            
            
        }
        else {
            // needs to be connected to backend by passing email and password
            if (this.validatePassword(this.state.signupPassword)) {
                this.setState({
                    passwordCorrect: 'correct',
                })
                return 1;
            }
            else {
                this.setState({
                    passwordCorrect: 'Signup Incorrect',
                }); 
            }
        }    
    }

    render() {

        return (
            <div className="Container">
                <div className="inner-container">
                    {/* middle line for design */}
                    <h1 id="header">Congratulations on your first step against <span style={{color:"red"}}>Cyber Bullying</span></h1>

                    <LoginError msg={this.state.passwordCorrect}/>

                    <div className="middleline"></div>
                    <div className="form-container row" >

                    {/* Login Form     */}
                    <form id="login" className="col-sm-4 mx-auto text-center" onSubmit = {this.handleSubmit}>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" id="loginemail" className="form-control" onChange = {this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                       </div>
                       <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="loginpass" onChange={this.handleChange} />
                       </div>
                         <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    
                    {/* Signup Form */}
                    <form id="signup" className="col-sm-4 mx-auto text-center" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="signupemail" onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                       </div>
                       <div className="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="signuppass" onChange={this.handleChange} />
                       </div>
                         <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}


