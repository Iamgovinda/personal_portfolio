import React, { useEffect, useState } from "react";
import { get } from "../../API/axios";
import { Button, Col, Container, Form, Row, InputGroup, Pagination } from "react-bootstrap";
import styles from './BlogPage.module.scss';
import BlogCard from "../../components/BlogCard/BlogCard";
import { useUserContext } from "../../context/UserContext";
import { Icon } from '@iconify/react';
import InfiniteScroll from 'react-infinite-scroll-component';

const BlogPage = () => {
    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUserData } = useUserContext();
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState(0);
    // const [page, setPage] = React.useState(1);
    const filters = {
        limit: limit,
        offset: offset
    }
    useEffect(() => {
        if (isLoading) {
            get(`blog`, filters).then((response) => {
                if (response.status === 200) {
                    setBlog(response?.data?.results);

                    setCount(response.data.page.count);
                    setIsLoading(false);
                }
            });
            if (!user) {
                get(`/user/info/`).then((response) => {
                    if (response.status === 200) {
                        setUserData(response.data?.results?.[0]);
                        setIsLoading(false);
                    }
                })
            }
        }
    }, [user, isLoading]);

    const handleChange = (e) => {
        const searchText = e.target.value;

        if (searchText) {
            filters.search = searchText;
            get(`blog`, filters).then((response) => {
                if (response.status === 200) {
                    setBlog(response?.data?.results);
                }
            });
        } else {
            setIsLoading(true);
        }

        // } else {
        //     get(`/blog`, filters).then((response) => {
        //         if (response.status === 200) {
        //             setBlog(response?.data?.results);
        //             console.log(response?.data?.results);
        //         }
        //     });
        // }
    }

    const fetchData = () => {
        setOffset(offset+10);
        // console.log("Now filter: ", filters);
        get(`/blog`, {limit:limit, offset:offset+10}).then((response) => {
            if (response.status === 200) {
                setBlog([...blog, ...response.data?.results]);
            }
        })
    }

    return (
        <>
                    
            <Container className={styles['container-parent']}>
                <div className={styles['search-box-div']}>
                    <p className={styles['text-1']}>All Blogs</p>
                    <div className="searchbar">
                        <InputGroup className="mb-3" size="lg">
                            <InputGroup.Text id="basic-addon1"><Icon icon="ic:outline-search" /></InputGroup.Text>
                            <Form.Control
                                placeholder="Search Blog"
                                aria-label="Search Blog"
                                aria-describedby="basic-addon1"
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </div>
                </div>
                {/* <Row>
                    {
                        blog?.map((item, index) => {
                            return (
                                <>
                                    <Col sm={12} md={6} lg={3}><BlogCard data={item} key={index} /></Col>
                                </>
                            )
                        })
                    }
                </Row> */}


                    <InfiniteScroll
                        dataLength={blog.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={blog.length < count}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                        style={{overflow: 'hidden'}}
                    >
                        <Row>
                            {
                                blog?.map((item, index) => {
                                    return (
                                        <>
                                            <Col sm={12} md={6} lg={3} key={index}><BlogCard data={item} /></Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                    </InfiniteScroll>
            </Container>
        </>
    )
};

export default BlogPage;
