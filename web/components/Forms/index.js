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
    <section onSubmit={sendEmail} className={ styles.formsSection }>

      <div className={styles.formContainer}>

        <figure className={styles.formFigure}>
          <img className ={styles.formImage_Avatar} src ="/images/tatiana.png" alt ="the person responsible for answering your message"  />
          <img className ={styles.formImage_Bar} src ="/images/grafismo.png" alt ="background"  />
          <img className ={styles.formImage_Contact} src ="/images/getInTouch.png" alt ="get in touch"  />
        </figure>

        <form onSubmit={sendEmail} className={styles.formContent}>

          <label className={ styles.formsInput_Label }>Name</label>
          <input type="text" name="user_name" className={ styles.inputField } placeholder="Your name" name="name"/>
            <div className={styles.inputEmailAndTelphone}>

              <div>
                <label className ={ styles.inputLabel }>Email*</label>
                <input type="email" name="email"  className={ styles.inputField_email} placeholder="example@example.com" required/>
              </div>

              <div>
                <label className ={ styles.inputLabel }>Telephone*</label>
                  <input
                    type="tel"
                    name="telphone"
                    className={ styles.inputField_row }
                    placeholder="(*) - xxxxx xxxx"
                    maxLength="12"
                    required
                  />
              </div>

            </div>

          <label className={ styles.formsInput_Label } >Subject</label>
          <input type="text" name="user_email"  className={ styles.inputField } placeholder="Please, write about the subject" name="subject"/>

          <label className={ styles.formsInput_Label } >Message*</label>
          <textarea name="message" placeholder="Please, write your message" name="message" required/>
          <input type="submit" value="Send now" className={ styles.inputButtonSend } />
        </form>
      </div>
    </section>
  );
};

export default Forms