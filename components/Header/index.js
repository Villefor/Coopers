import React from "react";
import Link  from 'next/link'
import styles from './styles.module.scss'

function Header() {
    return (
        <section className={ styles.headerContainer }>

            <header>

                <div className={styles.sectionHeader_FirstDiv}>
                  <img src="/images/fill.png" alt="logo"  />
                  <h1>Coopers</h1>
                </div>

                <div className={styles.sectionHeader_SecondDiv}>
                  <Link href="/development"><button> Entrar </button></Link>
                </div>

            </header>

            <section className={styles.sectionParagraph}>

              <div className={styles.sectionParagraph_FirstDiv}>
                <p> Organize <br/> <span className={styles.sectionParagraph_Span}> your daily jobs </span> </p>
                <p> The only way to get things done</p>
                <Link href="toDo_Sec"><button className={styles.headerLink_GoToButton}> Go to To-do list </button></Link>
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