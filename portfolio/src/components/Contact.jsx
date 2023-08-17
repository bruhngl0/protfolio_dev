import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap'


const Contact = () => {
  
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
  
   
    const sendEmail = (e) => {
      e.preventDefault();
  
  

      emailjs.sendForm('service_g13io8h', 'template_sqvl1ts', e.target , 'QD6N_2_ippXiQBT9H')
      .then((result) => {
        console.log(result.text)
        alert('message sent!')
        setUserEmail('')
        setUserName('')
        setMessage('')
      })
      .catch((error) => {
        console.log(error.text);
      });

  };

  const openEmail = ()=> {
    window.location.href = 'mailto: bruhngl0@gmail.com';
}


  return (
    <>
    <main className='contact-one'>
    <section className='contact-slider'>
        <div> CONTACT ME HERE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT ME HERE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT ME HERE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT ME HERE!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT ME HERE! </div> 
    </section>


    <section className='para'>
        <h1>Send me a message!</h1>
        <h4>Got a question or Proposal, or just want to say hello? Go ahead.</h4>
    </section>



    <form onSubmit={sendEmail}>


    <section className='ne'>
    <form className='form-one'>
      
      <input className= "try" type="text" placeholder= "Enter your name" name="user_name" value={userName} onChange={(e) => setUserName(e.target.value)} />
    </form>
    

    <form className='form-two'>
     
      <input type="email" className='fry' placeholder= "Enter your email address" name="user_email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
    </form>
    </section>


    <section className='be'>
    <form className='form-three' > 
      <textarea className = "text-ar" type= 'submit' placeholder= "enter text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
    </form>
    </section>
    <section className='btn-last'>
        <Button type="submit" variant="dark" className='last' style = {{width: '9rem'}} value="Send">shoot</Button>
        <h4>for quick response, message me directly at  bruhngl0@gmail.com : </h4> 
        <Button variant="dark" style = {{width: '9rem'}} onClick={openEmail}>mail me!</Button> 
    </section>

    </form>

    
      
    
    </main>

    </>
  );
};
  


export default Contact


