import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeImg from "../assets/12.jpg"
import Destination from '../components/Destination'
import Trip from '../components/Trip'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero cName="hero" img={HomeImg} title="Your Journey Your Story" desc="Choose Your Favorite Destination" buttonText="Travel Plan" url="/" btnClass="show"/>
      <Destination/>
      <Trip/>
    </>
  )
}

export default Home
