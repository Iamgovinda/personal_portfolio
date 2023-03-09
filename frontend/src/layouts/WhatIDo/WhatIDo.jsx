import React from 'react';
import { Row, Col, Container, Stack ,Button } from 'react-bootstrap';
import styles from './WhatIDo.module.scss';
import MyButton from '../../components/Button/Button';
import { useState, useEffect } from 'react';
import { get } from '../../API/axios';
const WhatIDo = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [whatIDo, setWhatIDo] = useState([])
  useEffect(()=>{
    if(isLoading){
        get(`/user/what_i_do/`).then((response)=>{
            if(response.status===200){
                setWhatIDo(response.data?.results)
                setIsLoading(false);
            }
        })
    }
  }, [isLoading, whatIDo])

    return (
        <div className={styles['parent']}>

            <Container>
                <Row gap={2} className={styles["grid-row"]}>
                    <Col lg={6} className={styles['col-right']}>
                        <p className={styles['wid-title']}>
                            What I do
                        </p>
                        <p className={styles['wid-desc']}>
                            {whatIDo[0]?.what_i_do_desc}
                        </p>
                        <MyButton txt="Say Hello" email={props?.email} style={{marginTop:'1rem'}} text='from whatido'/>
                    </Col>
                    <Col lg={6} className={styles['col-left']}>
                        <Stack style={{ gap: '1rem' }}>
                            {
                                whatIDo[0]?.what_i_do_items?.map((item, index) => {
                                    return (
                                        <div className={styles['wid-box']} key={index}>
                                            <p className={styles['wid-title']}>{item.title}</p>
                                            <p className={styles['wid-desc']}>{item.desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhatIDo