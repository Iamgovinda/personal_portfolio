import React from "react";
import styles from "./Resume.module.scss";
import { Row, Col, Container } from "react-bootstrap";

import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Resume = (props) => {

    return (
        <>
            <Container className={styles["container-parent"]} id="resume">
                <p className={styles["resume-title"]}>Resume</p>
                <hr />
                <Row className={styles["r-row"]}>
                    <Col lg={6} className={styles["r-column-left"]}>
                        <p className={styles["education"]}>Education</p>
                        {props?.data?.education?.map((item) => {
                            return (
                                <>
                                    <div className={styles["timeline-item"]}>
                                        <h5 className={styles["time-period"]}>{item?.end_date}</h5>
                                        <span className={styles["item-company"]}>
                                            {item?.title} , {item?.institute_name}
                                        </span>
                                        <div className={styles['dsc']}>{item?.description}</div>
                                    </div>
                                </>
                            );
                        })}
                    </Col>
                    <Col lg={6} className={styles["r-column-right"]}>
                        <p className={styles["education"]}>Experience</p>
                        {props?.data?.experience?.map((item, index) => {
                            return (
                                <>
                                    <div className={styles["timeline-item"]} key={index}>
                                        <h5 className={styles["time-period"]}>{item?.end_date}</h5>
                                        <span className={styles["item-company"]}>
                                        {item?.title} , {item?.company_name}
                                        </span>
                                        <div className={styles['dsc']}>
                                            {item?.description}                   
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </Col>
                </Row>

                <p className={styles["certificate"]}>Certificates</p>
                <Row>
                    {
                        props?.data?.certificate && props?.data?.certificate?.map((item, index) => {
                            return <>
                                <Col lg={6} key={index}>
                                    <a
                                        href={item?.link}
                                        target="_blank"
                                        style={{ textDecoration: "none" }}
                                        rel="noopener noreferrer"
                                    >
                                        <div className={styles["cert-parent"]}>
                                            {/* <img src="https://www.sololearn.com/Certificate/CT-BEND7IBK/jpg" alt="certi-img"/> */}
                                            <div className={styles["cert-img-box"]}>
                                                <img
                                                    src={item?.image?.file}
                                                    alt="certi-img"
                                                    className={styles["cert-img"]}
                                                />
                                            </div>
                                            <div className={styles["cert-content"]}>
                                                <div>
                                                    <p className={styles["certificate-name"]}>
                                                        {item?.name}
                                                    </p>
                                                </div>
                                                <div className={styles["certificate-id"]}>
                                                    Certification ID: {item?.certificate_id}
                                                </div>
                                                <div className={styles["certificate-id"]}>{item?.certification_date}</div>
                                                <div className={styles["certificate-id"]}>
                                                    Certification Agency: {item?.agency}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Col>
                            </>
                        })
                    }
                </Row>
                <Row style={{ marginTop: "1.5rem" }}>
                    <p className={styles["skills"]}>Skills</p>
                    {
                        props?.data?.skills?.map((item, index) => {
                            return <Col lg={3} md={6} sm={6} key={index}>
                                <div className={styles["skill-box"]}>
                                    <CircularProgressbar value={item?.skill_rate} text={`${item?.skill_rate}%`} backgroundPadding={0} styles={buildStyles({
                                        pathColor: '#250994',
                                        textColor: '#132238'
                                    })} strokeWidth={10} trailColor={'#d6d6d6'} />
                                    <p className={styles['skill-name']}>{item?.title}</p>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    );
};

export default Resume;
