import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css"
import avatar from "./avatar.svg"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      toAppointments: false,
    };
  }

  submitLoginForm = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const res = await axios.post("/auth/login", { email, password });
      const { name, id, token } = res.data;
      const user = { email, name, id, token };
      localStorage.setItem("servicesAppointmentUser", JSON.stringify(user));
      this.props.setUser(user);
      this.setState({ toAppointments: true });
    } catch (error) {
      document.getElementById("alert").classList.remove("d-none");
      document.getElementById("alert").innerText = error.response.data.error;
    }
  };

  render() {
    if (this.state.toAppointments) {
      return <Redirect to="/" />;
    }
    return (
      <body className="its1">
      {/* <div className="container">

        <div className="row">
        <div className="col-lg-4">

</div> */}

<div className="login-content">
<form className="mt-4" onSubmit={this.submitLoginForm}>
  <h2 className="centertext">WELCOME</h2>
<div class="imgcontainer">
    <img src={avatar} alt="avatar" className="logimage" />
  </div>
<hr />
<div
  className="alert alert-danger d-none"
  id="alert"
  ref="alert"
  role="alert"
></div>
<div className="one">
  <label className='div' htmlFor="exampleInputEmail1"><h2>Email address</h2></label>
  <input
    type="email"
    className="input"
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
    onChange={(e) => this.setState({ password: e.target.value })}
    value={this.state.password}
    required
  />
</div>

<button type="submit" className="newsubmit">
 <b>Login</b>
</button>
</form>
</div>

<div className="col-lg-4">

</div>
        {/* </div> */}

       {/* </div> */}
      </body>
    );
  }
}
