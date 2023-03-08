import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import { Container } from 'react-bootstrap';
import styles from './BlogLayout.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from '../../components/BlogCard/BlogCard';
import { get } from '../../API/axios';
import { Link } from 'react-router-dom';


const BlogLayout = () => {
    const [blog, setBlog] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (isLoading) {
            get(`/blog/`).then((response) => {
                if (response.status === 200) {
                    setBlog(response.data?.results);
                    setIsLoading(false);
                }
            })
        }
    }, [isLoading])
    const settings = {
        dots: true,
        infinite: false,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        pauseOnHover: true,
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
                    slidesToShow: 2,
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
        <Container id='blog' className={styles['blog']}>
            {
                (blog && blog.length > 0) && (<>
                    <div className={styles['blog-title']}>
                        <p>Blog</p>
                        {
                            (blog?.length>4) && <Link className={styles['view-all']} to='/all-blogs'>view all</Link>
                        }
                    </div>
                    <Slider {...settings}>
                        {
                            blog?.map((item, index) => {
                                return (
                                    <>
                                        <BlogCard key={index} data={item} />
                                    </>
                                )
                            })
                        }
                    </Slider>
                </>)
            }
        </Container>
    )
}

export default BlogLayout