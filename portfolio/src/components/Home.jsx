import React from 'react'
import { Button } from 'react-bootstrap'
import { FaHtml5 , FaCss3, FaNodeJs, FaJs, FaReact} from 'react-icons/fa'
import { SiExpress,  SiMongodb, SiGithub,  SiFigma,  SiSass, SiRedux} from "react-icons/si"

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
    
    

    
    <main className= "about-main-one" id= "about">
      <section className='sect-one'>
        <h3>About Me</h3>

        <p>Hi, I am Aditya Sharma, a passionate self-taught Full-Stack developer from India. While pursuing my Master's degree in Computational Mechanics, I quickly established a strong affinity for coding.  
          As I dive deep into learning, exploring, and the building applications for real-world use, 
          I find myself fully hooked in the realm of Web Development and Blockchain techonolgy.
          My goal is to evolve into a skilled web developer as I progress on this journey.</p>
      </section>

    
    </main>

    <main className='about-main-two'>
      <h3>Tech Stack</h3>
    
    <section className='icons'>
      <FaHtml5 className='icons-one' /> 
      <FaCss3 className='icons-one'/>
      <SiFigma className='icons-one'/>
      <SiSass className='icons-one'/>
      <FaJs className='icons-one'/>
      <FaReact className='icons-one'/>
      <SiRedux className='icons-one'/>
      <FaNodeJs className='icons-one'/>
      <SiExpress className='icons-one'/>
      <SiMongodb className='icons-one'/>
      <SiGithub className='icons-one'/>
      
    </section>
   

    </main>

    <main className='portfolio-one' id = 'projects'>

      <section className='heading'>
        <div>PROJECTS...</div>
      </section>

      <section className='proj-one'>
       
      </section>

      <section className='proj-two'>
        
      </section>

      <section className='proj-three'>
        
      </section>

      <section className='proj-four'>
        
      </section>

      <section className='proj-five'>
        
      </section>

      
    </main>

    


    
    </>
  )
}

export default Home
