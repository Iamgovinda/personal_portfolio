import SidebarMenu from 'react-bootstrap-sidebar-menu';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import styles from './SideBar.module.scss';
import { Row, Col } from 'react-bootstrap';

const SideBar = () => {

    return (
        <>
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
            </Row>

        </>
    )
}

export default SideBar;