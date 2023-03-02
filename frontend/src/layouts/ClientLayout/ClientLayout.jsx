import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ClientLayout.module.scss';
import Client from '../../components/Client/Client';

const ClientLayout = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 250,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container style={{ marginBottom: '2rem' }} id='clients'>
                {((props?.data && props?.data?.length>0) && (<>
                    <div className={styles['happy-client-title']}>Happy Clients</div>
                    <Slider {...settings}>
                        {
                            props?.data?.map((item, index) => {
                                return (
                                    <>
                                        <Client key={index} data={item} />
                                    </>
                                )
                            })
                        }
                    </Slider>
                </>))}

            </Container>
        </>
    )
}

export default ClientLayout