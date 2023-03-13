import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './UserInfo1Skeleton.module.scss'
import { Col, Row } from 'react-bootstrap';
const UserInfo1Skeleton = () => {
    return (
        <>
            <div className={styles['ui1-skeleton']}>
                <Row>
                    <Col lg={8}>
                        <Skeleton height={"40px"} style={{marginTop:'1rem'}}/>
                        <Skeleton height={"40px"} width={'12rem'}/>
                        <Skeleton height={"250px"} style={{marginTop:'1rem'}}/>
                        <Skeleton height={"50px"} width={'6rem'} style={{marginTop:'1rem'}}/>
                    </Col>
                    <Col>
                        <Skeleton height={"400px"} style={{marginTop:'1rem', borderRadius:'1rem'}}/>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default UserInfo1Skeleton