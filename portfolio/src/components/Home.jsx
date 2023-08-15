import React from 'react'
import { Button } from 'react-bootstrap'
import { FaHtml5 , FaCss3, FaNodeJs, FaJs, FaReact} from 'react-icons/fa'
import { SiExpress,  SiMongodb, SiGithub} from "react-icons/si"

const Home = () => {
  return (
    <>

 <main className='home-main' id= 'home'> 
 
 <section className = 'home-one'>
        <h1>FULL-STACK,</h1>
        <h1>DEVELOPER</h1> 
        <p>G'DAY, I am just a dude trying to be a solid <b>Web Developer</b>, and a decent human being along the way.</p>
        <Button className='btn btn-dark btn-sm'>Download Resume</Button>  
    </section>
    <section className='home-two'>
            <img src= "/bg/IMG-20230813-WA0008-removebg-preview(1).png" alt= "me" />
    </section>
 
 
 
 </main>
    {/*<main className='home-main' id= 'home'>
    <section className = 'home-one'>
        <h1>FULL-STACK,</h1>
        <h1>DEVELOPER</h1> 
        <p>G'DAY, I am just a dude trying to be a solid <b>Web Developer</b>, and a decent human being along the way.</p>
        <Button className='btn btn-dark btn-sm'>Download Resume</Button>  
    </section>
    <section className='home-two'>
            <img src= "/bg/IMG-20230813-WA0008-removebg-preview(1).png" alt= "me" />
            <div>
              
              <img src="/bg/Mask group1.jpg"/>
              <img src="/bg/v1043-042a-12.jpg"/>
             
            </div>
            
    </section>
  </main> */}  
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

    
    <main className= "about-main-one" id= "about">
      <section className='sect-one'>
        <h1>About Me</h1>

        <p>Hi, I am Aditya Sharma, a passionate self-taught Full-Stack developer from India. While pursuing my Master's degree in Computational Mechanics, I quickly established a strong affinity for coding.  
          As I dive deep into learning, exploring, and the building applications for real-world use, 
          I find myself fully hooked in the realm of Web Development and Blockchain techonolgy.
          My goal is to evolve into a skilled web developer as I progress on this journey.</p>
      </section>

      <section className='sect-two'>
        <h1>My Skillsets</h1>

        <p>
        In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.

        </p>
      </section>
    </main>

    <main className='lol'></main>


    
    </>
  )
}

export default Home
