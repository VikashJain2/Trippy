import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContactImg from "../assets/2.jpg"
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
   <Navbar/>
    <Hero cName="hero-mid" img={ContactImg} title="Contact" btnClass="hide"/>
    <ContactForm/>
 </>
  )
}

export default Contact
