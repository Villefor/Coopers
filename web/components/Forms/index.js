import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import styles from './styles.module.scss'

const Forms = () => {
  const [errors, setError] = React.useState(false)

  const [forms_image, setFormsImages] = React.useState([])

  useEffect(() => {
    const get_images_api = async () => {
      await fetch('https://dario.marbr.net/wp-json/wp/v2/pages/406', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          // console.log(response)
          return response.json()
        })
        .then((json) => {
          const acf = Object.keys(json.acf).map((key, index) => json.acf[key])
          setFormsImages(acf)
        })
    }
    get_images_api()
  }, [])

  console.log(forms_image)

  const send_email = (event) => {
    event.preventDefault()
    try {
      emailjs
        .sendForm(
          'gmail',
          'coopers_template',
          event.target,
          'user_UJwTBtiihcWWvri6q5IJP'
        )
        .then(
          (result) => {
            console.log(result.text)
            alert('E-mail sent successfully')
          },
          (error) => {
            console.log(error.text)
          }
        )
      event.target.reset()
    } catch (error) {
      setError(error.text)
    }
  }

  return (
    <section onSubmit={send_email} className={styles.formsSection}>
      <div className={styles.formContainer}>
        <figure className={styles.formFigure}>
          <img
            className={styles.formImage_Avatar}
            src={forms_image[10]}
            alt='the person responsible for answering your message'
          />
          <img
            className={styles.formImage_Bar}
            src={forms_image[7]}
            alt='background'
          />
          <img
            className={styles.formImage_Contact}
            src={forms_image[8]}
            alt='get in touch'
          />
        </figure>

        <form onSubmit={send_email} className={styles.formContent}>
          <label className={styles.formsInput_Label}>Name</label>
          <input
            type='text'
            name='user_name'
            className={styles.inputField}
            placeholder='Your name'
            name='name'
          />
          <div className={styles.inputEmailAndTelphone}>
            <div>
              <label className={styles.inputLabel}>Email*</label>
              <input
                type='email'
                name='email'
                className={styles.inputField_email}
                placeholder='example@example.com'
                required
              />
            </div>

            <div>
              <label className={styles.inputLabel}>Telephone*</label>
              <input
                type='tel'
                name='telphone'
                className={styles.inputField_row}
                placeholder='(*) - xxxxx xxxx'
                maxLength='12'
                required
              />
            </div>
          </div>

          <label className={styles.formsInput_Label}>Subject</label>
          <input
            type='text'
            name='user_email'
            className={styles.inputField}
            placeholder='Please, write about the subject'
            name='subject'
          />

          <label className={styles.formsInput_Label}>Message*</label>
          <textarea
            name='message'
            placeholder='Please, write your message'
            name='message'
            required
          />
          <input
            type='submit'
            value='Send now'
            className={styles.inputButtonSend}
          />
          {errors && <p>{errors}</p>}
        </form>
      </div>
    </section>
  )
}

export default Forms
