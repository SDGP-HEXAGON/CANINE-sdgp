import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {useHistory} from 'react-router-dom';

function HeroSection() {
  const history= useHistory();
  const handleClick =() => history.push('/products')
  const handleCheck =()=>history.push('/services')
  return (
    <div className='hero-container'>
      <video src='/videos/dog.mp4' autoPlay loop muted />
      <h1>WELCOME TO CANINE</h1>
      <p>What are you waiting for?</p>
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
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
