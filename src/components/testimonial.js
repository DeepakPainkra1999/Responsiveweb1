import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay,Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import data from '../data/testimonial.json';


const Testimonial = ({isBg}) => {
    const { testimonial } = data;

  return (
    <section
    id="reviews"
    className={`section-padding testimonial ${isBg==="yes"? "bg-one":""}`}
    >
        <div className="container">
            <div className="row">
                <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                    <div className="section-title-center text-center">
                        <span>{testimonial.subtitle}</span>
                        <h2 className="display-6">{testimonial.title}</h2>
                        <div className ="section-divider divider-traingle"></div>
                    </div>
                </div>
            </div>
            <div className="row testi-row">
                <div className= "col-12">
                    <Swiper 
                    modules={[Pagination,Autoplay]}
                    pagination={{clickable:true}}
                    autoplay
                    breakpoints={{
                        768:{
                            slidesPerView:2,
                            spacePerView:20,
                        }, 1024:{
                            slidesBetween:3,
                            spaceBetween:20,
                        },
                    }}
                    >
                        {testimonial.testimonialsItem?.map((data)=>(
                            <SwiperSlide key={data.id}>
                                <div className="swiper-slide p-5px-lr">
                                    <div className ="testi-card card h-100 translateEffect1">
                                        <div className="card-body p-4">
                                            <div className="testi-card_quotation">  

                                            </div>
                                            <p className="my-4">{data.description}</p>
                                            <div className ="testi-card_user-info pt-4">
                                                <div className="testimonial_user-info_image">
                                                    <img src={data.image} alt={data.title}/>
                                                </div>
                                                <div className="testimonial_user-info_content">
                                                    <h4 className="mb-0">{data.name}</h4>
                                                    <p className="mb-0">{data.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial;