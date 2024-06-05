import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImg from "../assets/night.jpg"
import Trip from '../components/Trip'
const Service = () => {
  return (
    <>
   <Navbar/>
    <Hero cName="hero-mid" img={ServiceImg} title="Service" btnClass="hide"/>
    <Trip/>
 </>
  )
}

export default Service
