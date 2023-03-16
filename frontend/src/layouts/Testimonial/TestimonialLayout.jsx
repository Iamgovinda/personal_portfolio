import React from 'react';
import Slider from 'react-slick';

import { Container } from 'react-bootstrap';
import './TestimonialLayoute.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


import Testimonial from '../../components/Testimonial/Testimonial';
import { Icon } from '@iconify/react';
import TestimonialSkeleton from '../../components/skeleton/TestimonialSkeleton';

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
        nextArrow: <Icon icon="material-symbols:arrow-circle-right" color='#132238' fontSize={'lg'} style={{left:'-30px !important'}}/>,
        prevArrow: <Icon icon="material-symbols:arrow-circle-left-sharp" color='#132238' fontSize={'lg'} style={{right:'-30px !important'}}/>,
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
        <Container style={{ marginBottom: '3rem' }}>
            {
                (props?.loading) ? (
                    <>
                        <Skeleton width={'8rem'} height={'3rem'} />
                        <hr />
                        <TestimonialSkeleton />
                    </>
                ) : (
                    <>
                        <div className='t-title'>Testimonial</div>
                        <Slider {...settings}>
                            {
                                props?.data?.map((item, index) => {
                                    return (
                                        <>
                                            <Testimonial key={index} data={item} />
                                        </>
                                    )
                                })
                            }
                        </Slider>
                    </>
                )
            }
        </Container>
    )
}

export default TestimonialLayout