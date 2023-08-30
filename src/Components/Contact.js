import React, { useState } from 'react'

function Contact() {

  let[name ,setName]= useState()
  let[email,setEmail]=useState()
  let[subject,setSubject]=useState()
  let[message,setMessage]=useState()



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
       <from onSubmit={handelsubmit} methods='post'>

      <input className='name' type='text'name='uname'placeholder='Enter your name' value ={name}onClick={(e=>setName(e.target.value))}>Name</input>
      <input  className ="email"type='text'name='uname'placeholder='Enter your email' value={email}onClick={(e=>setEmail(e.target.value))}>Email</input>
      <input  className ="subject"type='text'name='uname'placeholder='Enter your subject'value={subject} onClick={(e=>setSubject(e.target.value))}>subject</input>
      <textarea className='massage'placeholder='Enter your massage' value={message}onClick={(e=>setMessage(e.target.value))}></textarea>
      <div className='btn'>

                <button type='submit'>Submit</button>
                </div>
       </from>
    </div>
      </div>
  )
}

export default Contact
