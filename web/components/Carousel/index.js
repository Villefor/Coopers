import React, { useRef, useState, useEffect } from 'react'
import styles from './styles.module.scss'
// import 'swiper/css'
// import 'swiper/css/pagination'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Carousels(props) {
  const [images, setImages] = useState([])

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
        const acf = Object.keys(props.CarouselImages).map(
          (key, index) => props.CarouselImages[key]
        )
        setImages(acf)
      }
      get_photos_api()
    }
  }, [images])

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
        dotListClass={'custom-dot-list-style'}
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
