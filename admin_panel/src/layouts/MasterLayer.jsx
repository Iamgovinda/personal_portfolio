import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import NavigationBar from '../components/NavBar/Navbar';
import styles from '../components/SideBar/SideBar.module.scss';
import { Icon } from '@iconify/react';
import { Row, Col } from 'react-bootstrap';

const MasterLayer = (props) => {
    return (
        <>
            <NavigationBar />
            <Row className={styles["sidebar-row"]}>
                <Col xs={3} sm={2} md={2} lg={2} className={styles["sidebar-col"]}>
                    <div className={styles['menu']}>
                        <div className={styles["icon"]}>
                            <Icon icon="logos:blogger" fontSize={35} />
                        </div>
                        <p className={styles["menu-name"]}>
                            Blog
                        </p>
                    </div>
                </Col>
                <Col className={styles['right-div']}>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}

export default MasterLayer