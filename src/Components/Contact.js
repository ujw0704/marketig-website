import React, { useState } from 'react'

function Contact() {

  let[name ,setName]= useState("")
  let[email,setEmail]=useState("")
  let[subject,setSubject]=useState("")
  let[message,setMessage]=useState("")



  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { name, email, subject, message });

    
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
};
  return (
    <div className='conatiner'>
     
       <div className='form'>
       <from onSubmit={handleSubmit} methods='post'>
      
                <input className='name' type="text" placeholder='Enter Your name' value={name} onChange={e => setName(e.target.value)}  />
                <input className='email' type="email" placeholder='Enter Your email' value={email} onChange={e => setEmail(e.target.value)} />
                <input className='subject' type="text" placeholder='Enter Your subject' value={subject} onChange={e => setSubject(e.target.value)} />
                <textarea className='message' placeholder='Enter Your message' value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                <div className='btns'>
   

                <button type='submit'>Submit</button>
                </div>
       </from>
    </div>
      </div>
  )
}

export default Contact
