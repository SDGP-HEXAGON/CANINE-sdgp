import React, { Component } from "react";
import NavBar from "../NavBar";
import Appoiments from "../Appointments";
import Data from "../Data";
import Login from "../Login";


import {BrowserRouter as Router,Route,Switch,Redirect,HashRouter} from "react-router-dom";
import Services from "../ServicesList/Services";
import Signup from "../Signup";
import axios from "axios";
import AddService from "../Admin/AddService";
import Profile from "../Profile";
import ListAdmins from "../Admin/ListAdmins";
import AddAdmin from "../Admin/AddAdmin";
import NotFound from "../NotFound";

class Final extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };

  async componentDidMount() {
    if (!localStorage.getItem("servicesAppointmentUser")) {
      return;
    }
    const config = {
      headers: {
        Authorization: JSON.parse(
          localStorage.getItem("servicesAppointmentUser")
        ).token,
      },
    };
    try {
      const res = await axios.get("/auth/profile", config);
      const { email, id, name,  } = res.data;
      const token = JSON.parse(localStorage.getItem("servicesAppointmentUser"))
        .token;

      this.setUser({ email, id, name, token,  });
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("servicesAppointmentUser");
      }
    }
  }

  render() {
    return (
      // <HashRouter>
        <Router>
          <NavBar user={this.state.user} setUser={this.setUser} />
          
          <Switch>
            <Route exact path="/" component={Data} />
            <Route
              path="/signup"
              render={() =>
                Object.keys(this.state.user).length === 0 ? (
                  <Signup />
                ) : (
                  <Redirect to="/admin/addservice" />
                )
              }
            />
            <Route
              path="/login"
              render={() =>
                Object.keys(this.state.user).length === 0 ? (
                  <Login setUser={this.setUser} />
                ) : (
                  <Redirect to="/admin/addservice" />
                )
              }
            />
            <Route
              path="admin/addservice"
              render={() =>
                Object.keys(this.state.user).length !== 0 ? (
                  <Appoiments user={this.state.user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/services"
              render={() =>
                Object.keys(this.state.user).length !== 0 ? (
                  <Services
                    token={this.state.user.token}
                    email={this.state.user.email}
                    // isAdmin={this.state.user.isAdmin}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/admin"
              exact
              render={() =>
                this.state.user ? (
                  <ListAdmins token={this.state.user.token} />
                ) : (
                  <Redirect to="/home" />
                )
              }
            />
            <Route
              path="/admin/add"
              render={() =>
                this.state.user ? (
                  <AddAdmin token={this.state.user.token} />
                ) : (
                  <Redirect to="/home" />
                )
              }
            />
            <Route
              path="/admin/addservice"
              render={() =>
                this.state.user ? (
                  <AddService token={this.state.user.token} />
                ) : (
                  <Redirect to="/home" />
                )
              }
            />
            <Route
              path="/profile"
              render={() =>
                Object.keys(this.state.user).length !== 0 ? (
                  <Profile user={this.state.user} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route component={NotFound} />
          </Switch>
            
          
        </Router>
      // </HashRouter>
    );
  }
}

export default Final;
