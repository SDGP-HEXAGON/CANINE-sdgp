import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Signup.css"

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
      toLogin: false,
    };
  }

  submitSignupForm = async (e) => {
    e.preventDefault();

    if (this.state.password1 !== this.state.password2) {
      document.getElementById("alert").classList.remove("d-none");
      document.getElementById("alert").innerText = "Passwords don't match";
      return;
    }

    try {
      const { name, email, password1 } = this.state;
      await axios.post("/auth/signup", {
        name,
        email,
        password: password1,
        isAdmin: false,
      });
      alert("Login now");
      this.setState({ toLogin: true });
    } catch (error) {
      document.getElementById("alert").classList.remove("d-none");
      document.getElementById("alert").innerText = error.response.data.error;
    }
  };

  render() {
    if (this.state.toLogin) {
      return <Redirect to="/login" />;
    }
    return (
      <body className="its2">
        <div className="sign-content">
        <form className="sn-1" onSubmit={this.submitSignupForm}>
        <h2 className="signtext">Sign Up</h2>
        <hr />

        <div
          className="alert alert-danger d-none"
          id="alert"
          role="alert"
        ></div>

        <div className="two">
          <label className="vid" htmlFor="exampleInputEmail1"><h2>Name</h2></label>
          <input
            type="name"
            className="name-control"
            aria-describedby="emailHelp"
            placeholder="Name"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            required
          />
        
       
          <label htmlFor="exampleInputEmail1"><h2>Email address</h2></label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
            required
          />
        
          <label htmlFor="exampleInputPassword1"><h2>Password</h2></label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => this.setState({ password1: e.target.value })}
            value={this.state.password1}
            required
          />
        
        
          <label htmlFor="exampleInputPassword1"><h2>Confirm Password</h2></label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => this.setState({ password2: e.target.value })}
            value={this.state.password2}
            required
          />
        </div>
        <button type="submit" className="othersubmit">
          <b>Sign Up</b>
        </button>
      </form>
            </div>
            </body>
    );
  }
}
