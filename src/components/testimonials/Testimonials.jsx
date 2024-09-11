import React from 'react'
import './testimonials.css'
import { Data } from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonial container section" id='testimonials'>
            <h2 className="section__title">Testimonials</h2>
            <span className="section__subtitle">My Clients Say</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}>
                {Data.map(({ image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card">
                            <div className='testimonial__inner-card'>
                                <h3 className="testimonial__name">{title}</h3>
                                <p className="testimonial__description">
                                    <i class='bx bxs-quote-left' ></i> {description} <i class='bx bxs-quote-right' ></i>
                                </p>
                            </div>
                            {/* <img src={image} alt="" className='testimonial__img' /> */}


                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>
        </section>
    )
}

export default Testimonials