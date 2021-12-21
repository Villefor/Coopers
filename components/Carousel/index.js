import React from 'react';
import Link  from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper';
import styles from './styles.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';

function Carousel () {

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

  return(
    <section className={styles.carouselSection}>

      <div className={styles.carouselSection_Background}>
        <p className={ styles.carouselSection_Paragraph }>good things</p>

        <Swiper className="carouselSwiper"
          modules={[Pagination,]}
          spaceBetween={20}
          slidesPerView={3}
          listperpage={3}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {info.map((cards, index) => (
            <SwiperSlide key={ index } className="slide">
              <div className={styles.carouselSlide_Cards}>
                {/* <div className="user-image"> */}
                  <img className={ styles.carouselSlide_Card } src={cards.image} alt="business card"/>
                  <img className ={ styles.carouselSlide_Logo } src='/images/icon_coopers.png' alt ="Logo" />
                {/* </div> */}
                <div className={ styles.carouselSlide_DivParagraph }>
                  <button className= { styles.carouselSlide_Button }>function</button>
                  <p>{ cards.description }</p>
                  <Link href="/development"><button> Read more </button></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          ...
          </Swiper>
      </div>

    </section>
  )
}


export default Carousel;