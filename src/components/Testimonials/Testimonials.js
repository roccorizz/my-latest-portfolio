import React from 'react';
import "./Testimonials.css";
import { Data } from "./Data"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>
            <Swiper className="testimonials__container"
                loop={true}
                grabCursor={true}
                spaceBetween={48}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 1

                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}

            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt=""
                                className="testimonial__img"
                            />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;