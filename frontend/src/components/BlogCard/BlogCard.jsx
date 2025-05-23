import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './BlogCard.module.scss';
import { useNavigate } from 'react-router-dom';
import MyButton from '../Button/Button';
import { Button, Col, Row } from 'react-bootstrap';

const BlogCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card className={styles['blog-card-top']} style={{ pointer: 'cursor' }}>
      <Card.Img variant="bottom" src={props?.data?.thumbnail?.file ?? "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"}  className={styles['blog-img']}/>
        <Card.Body className={styles['blog-body']}>
          <p className={styles['blog-desc']}>
            {props?.data?.title}
          </p>
          <div className={styles['blog-body-div']}>
            <p className={styles['blog-info']}>{props?.data?.written_by} |  {props?.data?.publish_date}</p>
          </div>
          <Button size='sm' className={styles['btn']} onClick={() => navigate(`/view-blog/${props?.data?.uuid}`)}>Read Now</Button>
        </Card.Body>
    </Card >

    // <Row className={styles["blog-card-top"]}>
    //   <Col className={styles["img-div"]}>
    //     <img src={props?.data?.thumbnail?.file ?? "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"} className={styles['blog-img']} />
    //   </Col>
    //   <Col className={styles["blog-body"]}>
    //     <p className={styles['blog-desc']}>
    //       {props?.data?.title}
    //     </p>
    //     <p>
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iusto ducimus deserunt pariatur eius vel, eveniet veniam quia facere est recusandae illo adipisci libero dignissimos neque quasi ut praesentium sapiente.
    //     </p>
    //     <div className={styles['blog-body-div']}>
    //       <p className={styles['blog-info']}>{props?.data?.written_by} |  {props?.data?.publish_date}</p>
    //     </div>
    //     <Button size='sm' className={styles['btn']} onClick={() => navigate(`/view-blog/${props?.data?.uuid}`)}>Read Now</Button>
    //   </Col>
    // </Row>
  )
}

export default BlogCard