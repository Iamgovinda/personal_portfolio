import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './BlogCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const BlogCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card className={styles['blog-card-top']} style={{pointer:'cursor'}} onClick={()=>navigate(`/view-blog/${props?.data?.uuid}`)}>
      <Card.Img variant="top" src={props?.data?.thumbnail?.file ?? "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"} className={styles['blog-img']}/>
      <Card.Body className={styles['blog-body']}>
      <div className={styles['blog-body-div']}>
     <p className={styles['blog-info']}>{props?.data?.written_by} |  {props?.data?.publish_date}</p>
      </div>
        <p className={styles['blog-desc']}>
          {props?.data?.title}
        </p>
      </Card.Body>
    </Card>
  )
}

export default BlogCard