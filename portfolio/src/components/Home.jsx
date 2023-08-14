import React from 'react'
import { Button } from 'react-bootstrap'
import { FaHtml5 , FaCss3, FaNodeJs, FaJs, FaReact} from 'react-icons/fa'
import { SiExpress,  SiMongodb, SiGithub} from "react-icons/si"

const Home = () => {
  return (
    <>
    <main className='home-main'>
    <section className = 'home-one'>
        <h1>G'DAY, I am Aditya</h1> 
        <p>I am just a dude trying to be a solid <b>Full-Stack Developer</b>, and a decent human being along the way.</p>
        <Button className='btn btn-dark btn-sm'>Download Resume</Button>  
    </section>
    <section className='home-two'>
            <img src= "/bg/IMG-20230813-WA0008-removebg-preview(1).png" alt= "me" />
    </section>
    </main>
    <main className='home-main-two'>
      <h5><b>TECH STACK</b></h5>
    
    <section className='home-icons'>
      <FaHtml5 className='home-icons-one' /> 
      <FaCss3 className='home-icons-one'/>
      <FaJs className='home-icons-one'/>
      <FaReact className='home-icons-one'/>
      <FaNodeJs className='home-icons-one'/>
      <SiExpress className='home-icons-one'/>
      <SiMongodb className='home-icons-one'/>
      <SiGithub className='home-icons-one'/>
      
    </section>
   

    </main>

    <main className='home-main-three'>
      <section>
        <p>About</p>
      </section>
    </main>

    
    </>
  )
}

export default Home
