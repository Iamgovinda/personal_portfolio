import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './BlogSkeleton.module.scss';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from 'react-bootstrap';


const BlogSkeleton = (props) => {
    const baseColor = (props?.color) && 'white'
    return (
        <>
            <Row >
                {[1, 2, 3].map((item, index) => {
                    return <Col className={styles['blog-skeleton']}>
                        <Skeleton height={'150px'} baseColor={baseColor} />
                        <Skeleton height={'30px'} style={{ marginTop: '1rem' }} width={'6rem'} baseColor={baseColor} />
                        <Skeleton height={'15px'} style={{ marginTop: '1rem' }} width={'12rem'} baseColor={baseColor} />
                        <Skeleton height={'35px'} style={{ marginTop: '1rem', borderRadius: '3rem' }} width={'6rem'} baseColor={baseColor} />
                    </Col>
                })}
            </Row>
        </>
    )
}

export default BlogSkeleton