import React, { useState } from 'react'
import styles from './styles.module.scss'

import contat from "./api/contact"

function Forms () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

  let data = {
      name,
      email,
      message
  }

  fetch("./api/contact", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      console.log('Response received')
      if (response.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    }).catch ((error) => {
    console.log(error)
    })
  }

  return (

    <section className={styles.formsSection}>
      <form className={styles.main} >

        <div className={styles.inputGroup}>
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField}/>
        </div>

        <div className={styles.inputGroup} >
          <label htmlFor='email'>Email</label>
          <input type='text' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField}/>
       </div>

       <div className={styles.inputGroup} >
         <label htmlFor='message'>Message</label>
         <input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField}/>
       </div>

       <input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
      </form>
    </section>
  )
}

export default Forms;
