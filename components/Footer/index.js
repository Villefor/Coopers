import React from "react";

import styles from "./styles.module.scss"

const Footer = () => {
    return (
        <section className={styles.section}>
            <footer className={styles.footer}>
                <h1>Need help ?</h1>
                <h1>coopers@coopers.pro </h1>
                <p className={styles.footer__paragraph}>© 2021 Coopers. All rights reserved.</p>
                <div>
                  <figure>
                    <img className ={styles.footer__img} src ='/images/footer_rec.png' alt ="Rectangle"  />
                  </figure>
                </div>
            </footer>
        </section>
    )
}


export default Footer