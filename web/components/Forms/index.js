import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import styles from './styles.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Forms = (props) => {
  const [errors, setError] = useState(false)

  const notify_mail = () =>
    toast.success('Your email have been sent successfully', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  const notify_error = (err) =>
    toast.error(`Something went wrong, ${err.message}`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

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
            notify_mail('success')
            return result
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
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.formContainer}>
        <figure className={styles.formFigure}>
          <img
            className={styles.formImage_Avatar}
            src={props.FormsImages.forms_profile}
            alt='the person responsible for answering your message'
          />
          <img
            className={styles.formImage_Bar}
            src={props.FormsImages.graphism}
            alt='background'
          />
          <img
            className={styles.formImage_Contact}
            src={props.FormsImages.get_in_touch}
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
