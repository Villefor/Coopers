import React, { useRef, useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

function Carousels(props) {
  const [images, setImages] = useState([])
  const isMobile = useMediaQuery(850)
  const isTablet = useMediaQuery(1023)

  useEffect(() => {
    console.log(isMobile)
  }, [isMobile, isTablet])

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
      <div className={styles.carrouselCardContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView='auto'
          spaceBetween={30}
          slidesPerGroup={isMobile ? 1 : isTablet ? 2 : 3}
          // loop={true}
          // loopFillGroupWithBlank={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {images !== 0
            ? images.map((item, index) => {
                return (
                  <SwiperSlide key={index} style={{ maxWidth: '355px' }}>
                    <div key={index} className={styles.carrouselCardContent}>
                      <div className={styles.carroselHeaderImg}>
                        <img key={index} src={item.img} alt='Carousel Images' />
                      </div>
                      <div className={styles.carroselHeaderLogo}>
                        <img
                          src='/images/icon_coopers.png'
                          alt='Coopers Company icon'
                        />
                      </div>
                      <div className={styles.carroselDescription}>
                        <button>function</button>
                        <p key={index}> {item.description} </p>
                        <p className={styles.readMoreText}>read more</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            : null}
        </Swiper>
      </div>
    </section>
  )
}

export default Carousels
