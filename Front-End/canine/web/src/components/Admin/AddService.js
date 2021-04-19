import React, { useState } from "react";
import axios from "axios";
import "../one.css"

export default function AddService(props) {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");

  const addServiceFormSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: props.token,
      },
    };

    const data = { name, district, address };

    try {
      const res = await axios.post("/admin/service/add", data, config);
      if (Object.keys(res.data).length !== 0) {
        document.getElementById("alert").classList.add("alert-success");
        document.getElementById("alert").classList.remove("d-none");
        document.getElementById("alert").innerText = "Added service";
        setName("");
        setAddress("");
        setDistrict("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="container ">
        <div className="row">
            <div className="col-lg-2">
              
            </div>

            <div className="col-lg-8 login-con">
            <form className=" mt-4" onSubmit={addServiceFormSubmit}>
      <h3 className="center">ADD Dog Details</h3>
      <hr />
      <div className="alert d-none" id="alert" role="alert"></div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Dog Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Bread</label>
        <input
           type="text"
           className="form-control"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
        >
          </input>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Age</label>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Age"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-outline-primary radius">
        Add Dog
      </button>
    </form>
            </div>

            <div className="col-lg-2">

            </div>
        </div>
    </div>
  );
}
