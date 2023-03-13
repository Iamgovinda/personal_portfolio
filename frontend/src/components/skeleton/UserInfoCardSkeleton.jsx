import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './UserInfoCardSkeleton.module.scss';
import { Row, Col } from 'react-bootstrap';
const UserInfoCardSkeleton = () => {
    return (
        <div className={styles['skeleton-parent']}>
            <Row className={styles['content-row']} id='about'>
                <Col lg={5} className={styles['img-icon-box']} >
                    {/* <img src={props?.about[0]?.image?.file ?? userImg} alt="user-img" className={styles['user-img']} /> */}
                    {/* <div className={styles['icons']}>
                    <div className={styles["connections-icon-box"]}>
                        <a href={props?.about[0]?.social_links?.facebook}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener noreferrer"
                        ><Icon icon="basil:facebook-outline" className={styles['icon']} /></a>
                    </div>
                    <div className={styles["connections-icon-box"]}>
                        <a href={props?.about[0]?.social_links?.youtube}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener noreferrer"
                        ><Icon icon="lucide:youtube" className={styles['icon']} /></a>
                    </div>
                    <div className={styles["connections-icon-box"]}>
                        <a href={props?.about[0]?.social_links?.linkedln}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener noreferrer"
                        ><Icon icon="ion:logo-linkedin" className={styles['icon']} /></a>
                    </div>
                    <div className={styles["connections-icon-box"]}>
                        <a href={props?.about[0]?.social_links?.instagram}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener noreferrer"
                        ><Icon icon="lucide:instagram" className={styles['icon']} /></a>
                    </div>
                    <div className={styles["connections-icon-box"]}>
                        <a href={props?.about[0]?.social_links?.twitter}
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noopener noreferrer"
                        ><Icon icon="teenyicons:twitter-outline" className={styles['icon']} /></a>
                    </div>
                // </div> */}
                    <Skeleton height={'450px'} style={{borderRadius:'1rem'}}/>
                </Col>
                <Col lg={7} className={styles['col-right']}>
                    <Skeleton height={'50px'}/>
                    <Skeleton height={'30px'} width={'80px'} style={{marginTop:'1rem'}}/>
                    <Skeleton height={'300px'} style={{marginTop:'3rem'}}/>

                </Col>
            </Row>
        </div>
    )
}

export default UserInfoCardSkeleton