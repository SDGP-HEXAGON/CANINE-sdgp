import React, {Component} from 'react';
import './cssOfPages/Breed.css';
import Input from '@material-ui/core/Input';

class Breed extends Component{
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
    render(){
        return(
            <div class="breed_Container">
                <h1>Breed Identifier</h1>
                  <br/>
                  {/* <p><b>Find here What breed of the dog you have?</b></p> */}

                    <input type="btn12" name="file" onChange={this.handleChange}/>
                    <br/>
                    <br/>

                    <div class="breed_imgBox">
                    <img src={this.state.file} alt='file'/>
                    </div>

			              <div>
                    <button  className='btn12'>Find the Breed</button>
			              </div>
                    <br/>

                    <p>Your Dog's breed is &nbsp;<Input type="text"
                    defaultValue="" 
                    inputProps={{ 'aria-label': 'description' }}
                    /></p>
                    <br/>
            </div>
        )
    }
}
export default Breed;