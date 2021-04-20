import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useHistory} from 'react-router-dom';

function HeroSection() {
  const history= useHistory();
  const handleClick =() => history.push('/canine')
  const handleCheck =()=>history.push('/final')
  return (
    <div className='hero-container'>
      <video src='/videos/dog.mp4' autoPlay loop muted />
      <h1>WELCOME TO CANINE</h1>
      <p>What are you waiting for? You can Find Dog Breeds and Disease</p>
      <p>Maintain Your Loved Dogs Profile</p>
      <div className='hero-btns'>
        {/* <button type='button' 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleClick}>
            GET STARTED
          </button> */}
        <Button  
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleClick}
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleCheck}
        >
          DOG PROFILE <i className='fas fa-user fa-lg' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
