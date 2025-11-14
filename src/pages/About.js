import React from 'react'
import BannerImage from '../assets/BannerImage.webp'
import '../styles/About.css'


function About() {
  return (
    <div className ="about">
        <div className="aboutTop"
        style={{backgroundImage: `url(${BannerImage})`}}>
    </div>
        <div className ="aboutBottom"></div>
        <h1>About Us</h1>
        <p>Pizzeria is more than just a pizza shop; it's a vibrant, community-focused haven for families and friends. We offer a diverse menu of classic favorites and unique gourmet options in a comfortable, friendly atmosphere. Come in, relax, and create some mouthwatering memories with us.
             Our mission is to provide authentic Italian pizza using time-honored family recipes and the freshest ingredients. We believe in simple, quality food that brings people together. Join us for a slice of tradition, crafted with passion.
        </p>
      
    
    </div>
  );
}

export default About;
