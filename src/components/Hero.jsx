import React from 'react'
import './HeroStyle.css'
const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
      <img src = {props.img} alt="Hero Image" />
    </div>

    <div className="hero-text">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
    </>
  )
}

export default Hero
