import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ResumeSkeleton = () => {
    return (
        <>
            <Row>
                <Col>
                    <Skeleton height={'40px'}/>
                </Col>
                <Col>
                    <Skeleton />
                </Col>
            </Row>
        </>
    )
}

export default ResumeSkeleton