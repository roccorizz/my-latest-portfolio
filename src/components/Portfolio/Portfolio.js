import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Portfolio.css"
import { PortfolioData } from "./PortfolioData"
const Portfolio = () => {

    return (
        <section id="portfolio">

            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent works</span>
            <Swiper
                className="swiper__container"
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={48}
                slidesPerView={2}
                loop={true}

                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{

                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1
                    }
                }}
            >
                {PortfolioData.map(({ id, image, title, description, website }) => {
                    return (
                        <SwiperSlide className='swiper__slide'>
                            <div className="card lg:card-side" key={id}>
                                <figure><img src={image} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card__name">{title}</h2>
                                    <p className='card__description'>{description}</p>
                                    <div className="project__button_container">
                                        <a href={website}><button className="project__button"><i class='bx bx-globe project__button-icon'></i> See Website</button></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>


        </section >
    );
};

export default Portfolio;