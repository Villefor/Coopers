import React, { useState, useEffect } from 'react'

import styles from './styles.module.scss'

const Footer = () => {
  const [footer_image, setFooterImage] = useState([])

  const [footer_text, setFooterText] = useState([])

  useEffect(() => {
    const get_images_api = async () => {
      await fetch('https://dario.marbr.net/wp-json/wp/v2/pages/406', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          const acf = Object.keys(json.acf).map((key, index) => json.acf[key])
          setFooterImage(acf)
        })
    }
    get_images_api()
  }, [])

  useEffect(() => {
    const get_text_api = async () => {
      await fetch('https://dario.marbr.net/wp-json/wp/v2/pages/51', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          const acf = Object.keys(json.acf).map((key, index) => json.acf[key])
          setFooterText(acf)
        })
    }
    get_text_api()
  }, [])

  return (
    <section className={styles.section}>
      <footer className={styles.footer}>
        <h1>{footer_text[23]}</h1>
        <h1>{footer_text[24]} </h1>
        <p className={styles.footer__paragraph}>{footer_text[25]}</p>
        <div>
          <figure>
            <img
              className={styles.footer__img}
              src={footer_image[6]}
              alt='Rectangle'
            />
          </figure>
        </div>
      </footer>
    </section>
  )
}

export default Footer
