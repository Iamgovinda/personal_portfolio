import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './WIDSkeleton.module.scss';
import { Col, Row } from 'react-bootstrap';

const WIDSkeleton = () => {
    return (
        <>
            <Row>
                <Col className={styles['col-right']}>
                    <Skeleton height={'40px'} width={'100px'} baseColor='white'/>
                    <Skeleton height={'350px'} style={{ marginTop: '1rem' }} baseColor='white'/>
                    <Skeleton height={'40px'} width={'70px'} baseColor='white'/>
                </Col>
                <Col>
                    {
                        [1, 2, 3].map((item, index) => {
                            return (
                                <div className={styles['wid-bosx']} key={index}>
                                    <Skeleton height={'200px'} style={{ marginTop: '1rem', borderRadius:'1rem' }} baseColor='white'/>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </>
    )
}

export default WIDSkeleton