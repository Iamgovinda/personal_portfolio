import React from 'react';
import Slider from 'react-slick';

import { Container } from 'react-bootstrap';
import styles from './TestimonialLayout.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Testimonial from '../../components/Testimonial/Testimonial';
import { Icon } from '@iconify/react';

const TestimonialLayout = (props) => {
    const settings = {
        dots: false,
        infinite: props?.data?.length > 2,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        nextArrow: <Icon icon="material-symbols:arrow-circle-right" color='#132238' fontSize={'lg'}/>,
        prevArrow: <Icon icon="material-symbols:arrow-circle-left-sharp" color='#132238' fontSize={'lg'}/>,
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