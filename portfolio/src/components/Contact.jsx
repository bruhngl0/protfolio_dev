import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <label>Email</label>
      <input type="email" name="user_email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <input type="submit" value="Send" />
    </form>
  );
};
  


export default Contact


