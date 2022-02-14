import React from "react";
import "../styles/Card.css";
import AppleIcon from '@mui/icons-material/Apple';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';

const Cards = ({name}) => {
  return (
    <div className='card-container'>
      <img src='http://placehold.jp/150x150.png' alt='img' />
      <h2>{name}</h2>
      <div className='link-container'>
        <a href='#'> <AppleIcon />Apple Music</a>
        <a href='#'>Spotify</a>
        <a href='#'><GoogleIcon />Google Play</a>
        <a href='#'><YouTubeIcon />Youtube</a>
        
      </div>
    </div>
  );
};

export default Cards;
