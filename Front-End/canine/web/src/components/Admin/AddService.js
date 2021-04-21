import React, { useState } from "react";
import axios from "axios";
import "./AddService.css"
import Footer from '../Footer';
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
    <body className="boom">
        <div className="adding-conten">

            <form className=" de-1" onSubmit={addServiceFormSubmit}>
      <h2 className="comet">ADD Dog Details</h2>
      <hr />
      <div className="alert d-none" id="alert" role="alert"></div>

      <div className="nothing">
        <label htmlFor="exampleInputEmail1"><h2>Dog Breed</h2></label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Dog Breed"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      
        <label htmlFor="exampleInputPassword1"><h2>Contact Details</h2></label>
        <input
           type="text"
           className="form-control"
           rows="3"
           placeholder="Contact Details "
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
        >
          </input>
      
        <label htmlFor="exampleFormControlTextarea1"><h2>Age</h2></label>
        <textarea
          className="hey-control"
          
          rows="3"
          placeholder="Enter Age"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="success">
        Add Dog
      </button>
      </form>
            </div>
            {/* <Footer/> */}
            </body>
            
        
    
  );
}
