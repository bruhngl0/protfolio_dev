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
        <Button className='btn btn-light btn-sm'><b style ={{color: 'rgb(84, 76, 102)' }}> Resume</b></Button>  
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
        <div>PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS</div>
        
      </section>

      <section className='proj-one'>

        <div>
        <h3>Description</h3>
        <p>Successfully developed PROSHOP e-commerce website, that features user-friendly authentication with JWT tokens for secure access. Implemented protected routes and user/admin functionalities, bolstered by seamless PayPal and debit/credit card payment integration. Leveraged RTK Query for automated hooks, streamlining API requests, resulting in an efficient and reduced codebase by over 1000 lines.</p> 
        </div>
     
        <Card style={{ width: '20rem' }}>

          <Card.Img variant="top" src="/projects/projOne.png" />
          <Card.Body>
            <Card.Title>ProShop</Card.Title>
            </Card.Body>
      
          <Card.Body>
            <Card.Link href="https://proshop-mkh2.onrender.com/" target= "_blank" >Live Demo</Card.Link>
            <Card.Link href="https://github.com/bruhngl0/E-comm100hr" target = "_blank">GitHub</Card.Link>
          </Card.Body>

      
        </Card> 

      </section>

     

      <section className='proj-two'>

        
     
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="/projects/projTwo.png" />
          <Card.Body>
            <Card.Title>Xcrypto</Card.Title>
          </Card.Body>
     
          <Card.Body>
            <Card.Link href="https://64df17d8fdca5d17f1f6f98f--delightful-douhua-b5a4d2.netlify.app/"  target= "_blank">Live Demo</Card.Link>
            <Card.Link href="https://github.com/bruhngl0/try_threeReact" target= "_blank" >GitHub</Card.Link>
          </Card.Body>
        </Card>
  

        <div>
          <h3>Description</h3>
          <p>Dive into the captivating universe of digital assets with X Crypto, a meticulously crafted React application designed to empower you with real-time insights into the top 100 cryptocurrency exchanges and currencies. Built with a touch of innovation and a dash of elegance, X Crypto leverages the cutting-edge Chakra UI library to deliver a sleek, modern, and user-friendly interface that adapts flawlessly to any device.</p>  
        </div>
        
      </section>

      <section className='proj-three'>

        <div> 
          <h3>Description</h3>
          <p>Introducing "VideoHUB": Your Ultimate Destination for Seamless Learning Through Comprehensive Video Lectures and Courses!

Embark on a transformative learning journey with "VideoHUB," a dynamic React JSX and JavaScript-powered platform meticulously crafted to revolutionize how you absorb educational content. Designed to cater to both learners and educators, Video HUB provides an immersive haven where full-fledged video lectures and comprehensive courses come to life, all in one seamless and interruption-free environment.</p>  
        </div>
     
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="/projects/projThree.png" style ={{height: '20vh'}}/>
            <Card.Body>
                <Card.Title>VideoHub</Card.Title> 
            </Card.Body>
     
            <Card.Body>
                <Card.Link href="https://aquamarine-churros-d4fd59.netlify.app/" target= "_blank">Live Demo</Card.Link>
                <Card.Link href="https://github.com/bruhngl0/try_twoReact" target= "_blank">GitHub</Card.Link>
            </Card.Body>
        </Card>
  

     
        
      </section>

      <section className='proj-four'>
       
     
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="/projects/projFour.png"  style ={{height: '20vh'}}/>
        <Card.Body>
            <Card.Title>Techy Star</Card.Title>
        </Card.Body>
     
        <Card.Body>
            <Card.Link href="https://64df16c3fdca5d17a2f6f7d9--moonlit-sorbet-e9289a.netlify.app/" target= "_blank">Live Demo</Card.Link>
            <Card.Link href="https://github.com/bruhngl0/try_oneReact" target= "_blank">GitHub</Card.Link>
        </Card.Body> 
      </Card>
        
      <div> 
        <h3>Description</h3>
        <p>Step into the realm of cutting-edge solutions and unparalleled consultancy with "TechyStar," a captivating one-page React application that stands as a beacon of excellence for B2B services. Seamlessly blending the power of React and the artistry of Sass, TechyStar presents a captivating digital platform designed to provide unmatched services and strategic guidance to businesses on their journey to success.</p> 
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
