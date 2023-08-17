import React from 'react'
import { Button , Card, ListGroup } from 'react-bootstrap'
import { FaHtml5 , FaCss3, FaNodeJs, FaJs, FaReact} from 'react-icons/fa'
import {   SiMongodb, SiGithub,  SiFigma,  SiSass, SiRedux} from "react-icons/si"
import Contact from './Contact'

const Home = () => {
  return (
    <>

 <main className='home-main' id= 'home'> 
 
 <section className = 'home-one'>
        <h1>FULL-STACK</h1>
        <h1>DEVELOPER.</h1> 
        <p>G'DAY, I am just a dude trying to be a solid <b>Web Developer</b>, and a decent human being along the way.</p>
        <Button className='btn btn-light btn-sm'><b style ={{color: 'rgb(84, 76, 102)' }}>Download Resume</b></Button>  
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
     
      <SiMongodb className='icons-one'/>
      <SiGithub className='icons-one'/>
      
    </section>
   

    </main>

    <main className='portfolio-one' id = 'projects'>

      <section className='heading'>
        <div>PROJECTS...</div>
      </section>

      <section className='proj-one'>

        <div>
        <h3>Description</h3>
        <p>Successfully developed ANIPRO e-commerce website, that features user-friendly authentication with JWT tokens for secure access. Implemented protected routes and user/admin functionalities, bolstered by seamless PayPal and debit/credit card payment integration. Leveraged RTK Query for automated hooks, streamlining API requests, resulting in an efficient and reduced codebase by over 1000 lines.</p> 
        </div>
     
        <Card style={{ width: '20rem' }}>

          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            </Card.Body>
      
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>

      
        </Card> 

      </section>

     

      <section className='proj-two'>

        
     
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
     
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
  

        <div>
          <h3>Description</h3>
          <p>Successfully developed ANIPRO e-commerce website, featuring user-friendly authentication with JWT tokens for secure access. Implemented protected routes and user/admin functionalities, bolstered by seamless PayPal and debit/credit card payment integration. Leveraged RTK Query and automated hooks, streamlining API requests and enhancing code organization, resulting in a cleaner and more efficient implementation. Reduced codebase by over 1000 lines.</p>  
        </div>
        
      </section>

      <section className='proj-three'>

        <div> 
          <h3>Description</h3>
          <p>Successfully developed ANIPRO e-commerce website, featuring user-friendly authentication with JWT tokens for secure access. Implemented protected routes and user/admin functionalities, bolstered by seamless PayPal and debit/credit card payment integration. Leveraged RTK Query and automated hooks, streamlining API requests and enhancing code organization, resulting in a cleaner and more efficient implementation. Reduced codebase by over 1000 lines.</p>  
        </div>
     
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title> 
            </Card.Body>
     
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
  

     
        
      </section>

      <section className='proj-four'>
       
     
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
     
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> 
      </Card>
        
      <div> 
        <h3>Description</h3>
        <p>Successfully developed ANIPRO e-commerce website, featuring user-friendly authentication with JWT tokens for secure access. Implemented protected routes and user/admin functionalities, bolstered by seamless PayPal and debit/credit card payment integration. Leveraged RTK Query and automated hooks, streamlining API requests and enhancing code organization, resulting in a cleaner and more efficient implementation. Reduced codebase by over 1000 lines.</p> 
      </div>
    </section>  
    </main>


    <main className='contact-one' id="contact">
      <Contact />
    </main >
        
    </>
  )
}

export default Home
