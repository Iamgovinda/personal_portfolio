import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './TestimonialSkeleton.module.scss';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from 'react-bootstrap';


const TestimonialSkeleton = () => {
    return (
        <>
            <Row >
                {[1, 2].map((item, index) => {
                    return <Col lg={6}>
                        <div className={styles['t-skeleton']}>
                            <Skeleton baseColor='white' count={4} />
                            <Skeleton height={'1rem'} style={{ marginTop: '1rem', border: '1px solid black !important' }} width={'5rem'} borderRadius={'3rem'} baseColor='white' />
                            <Skeleton height={'1rem'} style={{ marginTop: '1rem', border: '1px solid black !important' }} width={'8rem'} borderRadius={'3rem'} baseColor='white' />
                            <Skeleton baseColor='white' className={styles['t-image']}/>
                        </div>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default TestimonialSkeleton