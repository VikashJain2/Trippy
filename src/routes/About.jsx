import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/night.jpg"
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <>
      <Navbar/>
       <Hero cName="hero-mid" img={AboutImg} title="About" btnClass="hide"/>
       <AboutUs/>
    </>
  )
}

export default About
