import React from "react";
import "../styles/Card.css";

const Cards = ({name}) => {
  return (
    <div className='card-container'>
      <img src='http://placehold.jp/150x150.png' alt='img' />
      <h2>{name}</h2>
      <div className='link-container'>
        <a href='#'>Apple Music</a>
        <a href='#'>Spotify</a>
        <a href='#'>Google Play</a>
        <a href='#'>Youtube</a>
        
      </div>
    </div>
  );
};

export default Cards;
