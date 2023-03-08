import React from 'react';
import Slider from 'react-slick';

import { Container } from 'react-bootstrap';
import styles from './TestimonialLayout.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Testimonial from '../../components/Testimonial/Testimonial';

const TestimonialLayout = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 250,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 10000,
        autoplaySpeed:10000,
        cssEase: "linear",
        pauseOnHover:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container style={{marginBottom:'2rem'}}>
            <div className={styles['t-title']}>Testimonial</div>
            <Slider {...settings}>
                {
                    props?.data?.map((item, index) => {
                        return (
                            <>
                                <Testimonial key={index} data={item}/>
                            </>
                        )
                    })
                }
            </Slider>
        </Container>
    )
}

export default TestimonialLayout