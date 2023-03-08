import React, { useEffect, useState } from "react";
import { get } from "../../API/axios";
import { Button, Col, Container, Form, Row, InputGroup, Pagination } from "react-bootstrap";
import styles from './BlogPage.module.scss';
import BlogCard from "../../components/BlogCard/BlogCard";
import { useUserContext } from "../../context/UserContext";
import { Icon } from '@iconify/react';

const BlogPage = () => {
    const [blog, setBlog] = useState([]);
    const { user, setUserData } = useUserContext();
    const [currentPage, setCurrentPage] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        get(`/blog`).then((response) => {
            if (response.status === 200) {
                setBlog(response?.data?.results);
                console.log(response?.data?.results);
            }
        });
        if (!user) {
            get(`/user/info/`).then((response) => {
                if (response.status === 200) {
                    setUserData(response.data?.results?.[0]);
                }
            })
        }
    }, [user]);

    const handleChange = (e) => {
        const searchText = e.target.value;
        if (searchText) {
            get(`/blog/?search=${searchText}`).then((response) => {
                if (response.status === 200) {
                    setBlog(response?.data?.results);
                    console.log(response?.data?.results);
                }
            });
        } else {
            get(`/blog`).then((response) => {
                if (response.status === 200) {
                    setBlog(response?.data?.results);
                    console.log(response?.data?.results);
                }
            });
        }
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                <Row>
                    {
                        blog?.map((item, index) => {
                            return (
                                <>
                                    <Col sm={12} md={6} lg={3}><BlogCard data={item} key={index} /></Col>
                                </>
                            )
                        })
                    }
                </Row>
                {/* <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>

\

                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination> */}

            </Container>
        </>
    )
};

export default BlogPage;
