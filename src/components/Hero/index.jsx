import React from 'react'
import "./style.css"
const Hero = () => {
  return (
    <div className="hero">
    <div className="hero__left">
      <h1 className="hero__title">
        DESIGN &amp; TECH<br />
        AGENCY HELPING<br />
        BRANDS BECOME<br />
        <span className="hero__highlight">TOP 1%</span>
      </h1>
      <div className="hero__info-row">
        <span className="hero__icon" role="img" aria-label="flame">🔥</span>
        <span className="hero__info-text">
          12 years of design-driven 
          <br />development for B2B products
        </span>
        <button className="hero__call-btn">BOOK A CALL</button>
      </div>
    </div>
    <div className="hero__right">
        <div className="hero__play-button">
          <span>&#9658;</span></div>
    </div>
    </div>
  )
}

export default Hero