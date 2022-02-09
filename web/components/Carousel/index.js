import React, { useRef, useState, useEffect } from 'react'
import styles from './styles.module.scss'
// import 'swiper/css'
// import 'swiper/css/pagination'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Carousels(props) {
  const [page, setPage] = useState(0)

  const [images, setImages] = useState([])

  const info = [
    {
      description: 'Organize your daily job enhance your life performance',
      image: '/images/card_1.png',
      // imageurl: `https://dario.marbr.net/wp-content/uploads/2022/02/card_1.png`,
    },

    {
      description:
        'Mark one activity as done makes your brain understands the power of doing.',
      image: '/images/card_2.png',
      // imageurl: 'https://dario.marbr.net/wp-content/uploads/2022/02/card_2.png',
    },

    {
      description:
        'Careful with missunderstanding the difference between a list of things and a list of desires.',
      image: '/images/card_3.png',
    },

    {
      description: 'Planning meetings as easy as one step.',
      image: '/images/card_4.jpg',
    },

    {
      description: 'Teams are meant to be together, to be in touch.',
      image: '/images/card_5.png',
    },

    {
      description: 'Teams are meant to be together, to be in touch.',
      image: '/images/card_6.png',
    },

    {
      description: 'Results are undeniable as are facts.',
      image: '/images/card_7.png',
    },

    {
      description:
        'Want to band together to build something awesome ? Plan ahead.',
      image: '/images/card_8.png',
    },

    {
      description: 'Planning acordingly to your desires and fits.',
      image: '/images/card_9.png',
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 765 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1,
    },
  }

  useEffect(() => {
    if (images.length === 0) {
      const get_photos_api = async () => {
        await fetch('https://dario.marbr.net/wp-json/wp/v2/pages/84', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            // console.log(response)
            return response.json()
          })
          .then((json) => {
            const acf = Object.keys(json.acf).map((key, index) => json.acf[key])
            setImages(acf)
          })
      }
      get_photos_api()
    }
  }, [images])

  console.log(images)

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselSection_Background}>
        <p className={styles.carouselSection_Paragraph}>good things</p>
      </div>
      {/* <div className={styles.carrouselCardContainer}> */}
      <Carousel
        showDots
        focusOnSelect={true}
        infinite={true}
        slidesToSlide={3}
        arrows={false}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition='all .5'
        containerClass={styles.carrouselCardContainer}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {images !== 0
          ? images.map((item, index) => {
              return (
                <div key={index} className={styles.carrouselCardContent}>
                  <div className={styles.carroselHeaderImg}>
                    <img key={index} src={item.img} />
                  </div>
                  <div className={styles.carroselHeaderLogo}>
                    <img src='/images/icon_coopers.png' />
                  </div>
                  <div className={styles.carroselDescription}>
                    <button>function</button>
                    <p key={index}> {item.description} </p>
                    <p className={styles.readMoreText}>read more</p>
                  </div>
                </div>
              )
            })
          : null}
      </Carousel>
      {/* </div> */}
      <div className={styles.buttonsCarrousel}></div>
    </section>
  )
}

export default Carousels
