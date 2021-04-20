import React, { Component } from "react";
import { Button, Container, Spinner } from "reactstrap";
import AppointmentModel from "./AppointmentModel";
import axios from "axios";
import _ from "lodash";
import "../one.css"

export default class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
      modal: false,
      selectedService: "",
      filteredServices: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getAllServices();
  }

  getAllServices = async () => {
    const config = {
      headers: {
        Authorization: this.props.token,
      },
    };

    try {
      const res = await axios.get("/services/list", config);
      this.setState({
        services: res.data,
        filteredServices: res.data,
        loaded: true,
      });
    } catch (error) {
      document.getElementById("alert").classList.remove("d-none");
      document.getElementById("alert").innerText =
        "Error fetching services list";
    }
  };

  searchServices = (search) => {
    let filteredServices = this.state.services.filter((service) =>
    service.address.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ filteredServices });
  };

  deleteService = async (id) => {
    const config = {
      headers: {
        Authorization: this.props.token,
      },
    };
    try {
      const res = await axios.delete(`/admin/services/delete/${id}`, config);
      const { success } = res.data;
      if (success) {
        let docts = this.state.services;
        let docToDelete = _.find(docts, _.matchesProperty("_id", id));
        const newDocts = _.without(docts, docToDelete);
        this.setState({
          services: newDocts,
          filteredServices: newDocts,
        });
      }
    } catch (error) {
      document.getElementById("alert").classList.remove("d-none");
      document.getElementById("alert").innerText = "Error deleting service";
    }
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    if (!this.state.loaded) {
      return (
        <React.Fragment>
          <Container
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "50vh",
              alignItems: "center",
            }}
          >
            <Spinner
            type="grow"
            color="primary"
              animation="border"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Container>
        </React.Fragment>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2">

          </div>

          <div className="col-lg-8 login-con">
          <div className=" mt-4">
          
            
        
            <h1 className="center">Dog Details</h1>
          
          <hr />
          <div
            className="alert alert-danger d-none"
            id="alert"
            role="alert"
          ></div>
          <form onSubmit={this.searchServices}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">

              </label>
              <input
                type="name"
                className="form-control"
                placeholder="Search Dog Details by thier Name"
                onChange={(e) => this.searchServices(e.target.value)}
              />
            </div>
          </form>
          {this.state.services.length === 0 ? (
            <h3 className="mt-4">No Dog Details Found</h3>
          ) : (
            <ul className="card-columns">
              {this.state.filteredServices.map((service) => {
                return (
                  <li className="card col-12 card__2" key={service._id}>
                    <span className="font-weight-bold">Dog Name:<br/></span> {service.name} <br />
                    <span className="font-weight-bold">Bread:<br/></span> {service.district} <br />
                    <span className="font-weight-bold">Age:<br/></span> {service.address}
                    <br />
                    
                    
                  
                    
                  
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <AppointmentModel
          serviceName={this.state.selectedService}
          modal={this.state.modal}
          toggle={this.toggle}
          email={this.props.email}
          token={this.props.token}
        />
          </div>

          <div className="col-lg-2">

          </div>

        </div>
      </div>
    );
  }
}