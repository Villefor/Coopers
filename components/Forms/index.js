import React from 'react';
import emailjs from 'emailjs-com';
import styles from './styles.module.scss'

const Forms = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('gmail', 'coopers_template', event.target, 'user_UJwTBtiihcWWvri6q5IJP')
      .then((result) => {
          console.log(result.text);
          alert("E-mail sent successfully");
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong")
      });
      event.target.reset()
  };

  return (
    <form onSubmit={sendEmail} className={ styles.formsSection } >
      <figure className={styles.formFigure}>
        <img className ={styles.formImage_Avatar} src ="/images/tatiana.png" alt ="the person responsible for answering your message"  />
        <img className ={styles.formImage_Bar} src ="/images/grafismo.png" alt ="background"  />
        <img className ={styles.formImage_Contact} src ="/images/getInTouch.png" alt ="get in touch"  />
      </figure>

      <label>Name</label>
      <input type="text" name="user_name" className={ styles.inputField } placeholder="Your name" name="name"/>

      <div className={styles.formDiv}>
        <label className ={ styles.inputLabel }>Email*</label>
        <input type="email" name="user_email"  className={ styles.inputField_row} placeholder="Please, inform your e-mail" name="email"/>

        <label className ={ styles.inputLabel }>Telephone*</label>
        <input type="number" name="user_telephone"  className={ styles.inputField_row } placeholder="Please, inform your number" name="number"/>
      </div>

      <label>Subject</label>
      <input type="text" name="user_email"  className={ styles.inputField } placeholder="Please, write about the subject" name="subject"/>

      <label>Message*</label>
      <textarea name="message" placeholder="Please, write your message" name="message"/>

      <input type="submit" value="Send" className={ styles.inputField } />
    </form>
  );
};

export default Forms