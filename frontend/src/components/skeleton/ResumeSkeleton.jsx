import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './ResumeSkeleton.module.scss';

const ResumeSkeleton = () => {
    return (
        <>
            <Row>
                <Col lg={12}><Skeleton baseColor='white' height={'60px'} /></Col>
                <Col className={styles['btns']} lg={12} style={{ marginTop: '1rem' }}>
                    <Skeleton height={'40px'} width={'100px'} baseColor='white' />
                    <Skeleton height={'40px'} width={'100px'} baseColor='white' />
                </Col>
            </Row>
            {
                [1, 2, 3].map((item, index) => {
                    return <>
                        <Row style={{ marginTop: '2rem' }}>
                            <Col className={styles['col-left']} lg={5}>
                                <Skeleton baseColor='white' width={'200px'} height={'40px'} />
                            </Col>
                            <Col lg={6}>
                                <Skeleton height={'200px'} style={{ borderRadius: '1rem' }} baseColor='white' />
                            </Col>
                        </Row>
                    </>
                })
            }

            <Row style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                <Col><Skeleton height={'50px'} width={'160px'} baseColor='white' /></Col>
            </Row>
            <Row style={{ marginBottom: '1rem' }}>
                <Col>
                    <Skeleton height={'150px'} baseColor='white' />
                </Col>
                <Col><Skeleton height={'150px'} baseColor='white' /></Col>
            </Row>

            <Row style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                <Col><Skeleton height={'50px'} width={'160px'} baseColor='white' /></Col>
            </Row>
            <Row style={{ marginBottom: '1rem' }}>
                {
                    [1, 2, 3, 4].map((item) => {
                        return (
                            <>
                                <Col className={styles['skill-box']}>
                                    <Skeleton height={'150px'} width={'150px'} baseColor='white' borderRadius={'100rem'}/>
                                    <Skeleton baseColor={'white'} height={'1.5rem'} width={'4rem'}/>
                                </Col>
                            </>
                        )
                    })
                }
            </Row>

        </>
    )
}

export default ResumeSkeleton