import React, {Component} from 'react';
import './cssOfPages/Breed.css';
import Input from '@material-ui/core/Input';
import $, { event } from 'jquery';

class Breed extends Component{
    constructor(props){
        super(props)
        this.state = {
          breed : "",
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
      handleChange(event) {
        console.log('image : ', event.target.files[0]);
        let file = event.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

      _handleReaderLoaded = (readerEvt) => {
        let BinaryString = readerEvt.target.result;
        this.setState({
            base64TextString: btoa(BinaryString)
        })
      }
      onSubmit=(e)=>{
        e.preventDefault()
        console.log("Work")
        console.log("base66  : ", this.state.base64TextString );

        var formData ={image: this.state.base64TextString};
        $.ajax({
          url: 'http://127.0.0.1:5000/api/post/data',
          type: 'POST',
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify(formData),
          success: function(data, textStatus, xhr) {
              alert("You upload " + data +" Breed dog image");
              // $('#txt').text(data + "- this disease your dog have");
              data = this.state.breed;
          },
          
          error: function(xhr, textStatus, errorThrown) {
              console.log('Error in Operation');
          }
      });
      }
    render(){
        return(
          <body className="arul">
            <div class="breed_Container">
                <h1>Breed Identifier</h1>
                  <br/>
                  {/* <p><b>Find here What breed of the dog you have?</b></p> */}

                    <input class="btn12" type="file" name="file" onChange={this.handleChange}/>
                    <br/>
                    <br/>

                    <div class="breed_imgBox">
                    <img src={this.state.file} alt='file'/>
                    </div>

			              <div>
                    <button  className='btn12'onClick={this.onSubmit}>Find the Breed</button>
			              </div>
                    <br/>

                    <p>Your Dog's breed is &nbsp;<Input type="text"
                    value ={this.state.breed}
                    inputProps={{ 'aria-label': 'description' }}
                    /></p>
                    <br/>
            </div>
            </body>
        )
    }
}
export default Breed;