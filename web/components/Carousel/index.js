import React, { useRef } from 'react';
import styles from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

function Carousel () {
  const carousel = useRef(null);

  const info = [
    {
      description: 'Organize your daily job enhance your life performance',
      image: "/images/card_1.png",
    },

    {
      description: 'Mark one activity as done makes your brain understands the power of doing.',
      image: "/images/card_2.png",
    },

    {
      description: 'Careful with missunderstanding the difference between a list of things and a list of desires.',
      image: "/images/card_3.png",
    },

    {
      description: 'Planning meetings as easy as one step.',
      image: "/images/card_4.jpg",
    },

    {
      description: 'Teams are meant to be together, to be in touch.',
      image: "/images/card_5.png",
    },

    {
      description: 'Teams are meant to be together, to be in touch.',
      image: "/images/card_6.png",
    },

    {
      description: 'Results are undeniable as are facts.',
      image: "/images/card_7.png",
    },

    {
      description: 'Want to band together to build something awesome ? Plan ahead.',
      image: "/images/card_8.png",
    },

    {
      description: 'Planning acordingly your desires and fits.',
      image: "/images/card_9.png",
    },
  ];

  const handleLeftClick = (event) => {
    event.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (event) => {
    event.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return(
    <section className={styles.carouselSection}>

      <div className={styles.carouselSection_Background}>
        <p className={ styles.carouselSection_Paragraph }>good things</p>
      </div>

      <div className={styles.carrouselCardContainer} ref={carousel}>
        {
          info.map((item, index) => (
            <div key ={index} className={styles.carrouselCardContent}>
              <div className={styles.carroselHeaderImg}>
                <img key ={index} src={item.image}/>
              </div>
              <div className={styles.carroselHeaderLogo}>
                <img src="/images/icon_coopers.png"/>
              </div>
              <div className={styles.carroselDescription}>
                <button>function</button>
                <p>{item.description}</p>
                <p>read more</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.buttonsCarrousel}>
        <button onClick={handleLeftClick}></button>
        <button onClick={handleRightClick}></button>
      </div>

    </section>
  )
}


export default Carousel;