import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these BREED Dogs!</h1>
      <h1>- Click for more Information -</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/d2.jpg'
              text='Intelligent, Stubborn, Curious, Alert and easy to train'
              label='Sheperd'
              path='/products'
            />
            <CardItem
              src='images/d1.jpg'
              text='Intelligent, Even Tempered, Outgoing ,Play dog and easy to train , No aggressive'
              label='Labrador Retirever'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/d7.jpg'
              text='Single owner dog, aggressive and best dog breed for guard their owners '
              label='Rottweiler'
              path='/products'
            />
            <CardItem
              src='images/d8.jpg'
              text='Intelligent, Affectionate, Strong Willed more aggressive'
              label='Pit Bull'
              path='/products'
            />
            <CardItem
              src='images/d6.jpg'
              text='Single owner dog and best dog breed for guard their owners'
              label='Dobermann'
              path='/products'
            />
            {/* Click to Find more Breeds */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
