import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './UserInfoCard.module.scss';
import userImg from '../../assets/UserInfo/user1.jpg';
import { Icon } from '@iconify/react';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import UserInfoCardSkeleton from '../skeleton/UserInfoCardSkeleton';





const UserInfoCard = (props) => {
    return (
        <>
            {
                (props?.loading) ? (
                    <>
                        <UserInfoCardSkeleton />
                    </>

                ) : (
                    <>
                        <Row className={styles['content-row']} id='about'>
                            <Col lg={6} className={styles['img-icon-box']}>
                                <img src={props?.about[0]?.image?.file ?? userImg} alt="user-img" className={styles['user-img']} />
                                <div className={styles['icons']}>
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
                                </div>
                            </Col>
                            <Col lg={6} className={styles['col-right']}>
                                <p className={styles['intro']}>{props?.about[0]?.title}</p>
                                <p className={styles['intro-mid']}>{props?.about[0]?.about}</p>
                            </Col>
                        </Row>
                    </>
                )
            }
        </>
    )
}

export default UserInfoCard