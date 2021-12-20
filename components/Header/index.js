import React from "react";
import Link  from 'next/link'
import styles from './styles.module.scss'

function Header() {
    return (
        <section className={ styles.headerContainer }>
            <header className="header">
                <div className={styles.sectionHeader_FirstDiv}>
                  <img className ="header-img__logo" src="/images/fill.png" alt="logo"  />
                  <h1 className ="header-h1">Coopers</h1>
                </div>
                <div className={styles.sectionHeader_SecondDiv}>
                <Link href="/development"><button className="header-link__button"> Entrar </button></Link>
                </div>
            </header>
            <section className={styles.sectionParagraph}>
              <div className={styles.sectionParagraph_FIrstDiv}>
                <p> Organize <br/> <span className={styles.sectionParagraph_Span}> your daily jobs </span> </p>
                <p> The only way to get things done</p>
                <button className={styles.headerLink_GoToButton}> Go to To-do list </button>
              </div>
              <div className={styles.sectionParagraph_SecondDiv}>
                <img className={styles.headerImage_BackLogo} src= "/images/coopersLogo.png" alt="background Logo" />
                <img className ={styles.headerImage_Office}  src ="/images/office.jpg" alt ="Office"  />
              </div>
            </section>

        </section>
    )
}


export default Header