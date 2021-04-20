import React from 'react';
import './cssOfPages/Canine.css';
import {useHistory} from 'react-router-dom';

function Canine() {
  const history= useHistory();
  const handleClick =() => history.push('/breed')
  const handleCheck =()=>history.push('/symptoms')
  return(
      
    <div class="ser_container">
          
            <div class="ser_box">
                <div class="ser_imgBox">
                    <img src='images/Ser_dog1.jpg' alt="ser_dog1"/>
                </div>
                <div class="ser_details">
                    <div class="ser_content">
                    <h2>Breed Identification</h2>
                    <p>Outside of a dog, a book is a man’s 
                        best friend. Inside of a dog it’s too dark to read.</p>
                        <button class="button123" onClick={handleClick}>Click Here
                        <div class="button__horizontal"></div>
	                    <div class="button__vertical"></div>
                        </button>
                    </div>
                    {/* <div>
                        <button>Click Here</button>
                    </div> */}
                </div>
            </div>
            <div class="ser_box">
            <div class="ser_imgBox">
                    <img src='images/Ser_dog2.jpg' alt="ser_dog2"/>
                </div>
                <div class="ser_details">
                    <div class="ser_content">
                    <h2>Disease Findings</h2>
                    <p>No one appreciates the 
                        very special genius of your conversation as the dog does.</p>
                        <button className="button123" onClick={handleCheck}>Click Here</button>
                    </div>
                    {/* <div>
                        <button>Click Here</button>
                    </div> */}
                </div>
            </div>
        </div>
    

   ); 
}
export default Canine;