import React, { useState, useEffect } from 'react'

import styles from './styles.module.scss'

const Footer = (props) => {
  console.log(props)
  return (
    <section className={styles.section}>
      <footer className={styles.footer}>
        <h1>{props.FooterText.footer_need_help}</h1>
        <h1>{props.FooterText.footer_email} </h1>
        <p className={styles.footer__paragraph}>
          {props.FooterText.footer_coopers_year}
        </p>
        <div>
          <figure>
            <img
              className={styles.footer__img}
              src={props.FooterImages.footer_rectangle}
              alt='Rectangle'
            />
          </figure>
        </div>
      </footer>
    </section>
  )
}

export default Footer
