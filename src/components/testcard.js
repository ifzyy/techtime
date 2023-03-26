import React from "react";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/testimonial.css'
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";



const Testcard = () => {
    const windowWidth = useRef(window.innerWidth);    
        return (
            <>
                <Swiper
                    slidesPerView={windowWidth.current < 768 ? 1 : 2.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <div className="testimonial__card__content">
                                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                                <div className="testimonial__card__profile">
                                    <img src="images/bella.png" alt="" />
                                    <div className="testimonial__card__profile__content">
                                        <span className="testimonial__card__profile__name">Bella moon</span>
                                        <span className="testimonial__card__profile__job">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <div className="testimonial__card__content">
                                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                                <div className="testimonial__card__profile">
                                    <img src="images/fortune.png" alt="" />
                                    <div className="testimonial__card__profile__content">
                                        <span className="testimonial__card__profile__name">samuel fortune</span>
                                        <span className="testimonial__card__profile__job">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <div className="testimonial__card__content">
                                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                                <div className="testimonial__card__profile">
                                    <img src="images/bryce.png" alt="" />
                                    <div className="testimonial__card__profile__content">
                                        <span className="testimonial__card__profile__name">bryce jason</span>
                                        <span className="testimonial__card__profile__job">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <div className="testimonial__card__content">
                                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                                <div className="testimonial__card__profile">
                                    <img src="images/bella.png" alt="" />
                                    <div className="testimonial__card__profile__content">
                                        <span className="testimonial__card__profile__name">Bella moon</span>
                                        <span className="testimonial__card__profile__job">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial__card">
                            <div className="testimonial__card__content">
                                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
                                <div className="testimonial__card__profile">
                                    <img src="images/fortune.png" alt="" />
                                    <div className="testimonial__card__profile__content">
                                        <span className="testimonial__card__profile__name">samuel fortune</span>
                                        <span className="testimonial__card__profile__job">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        );
}
export default Testcard