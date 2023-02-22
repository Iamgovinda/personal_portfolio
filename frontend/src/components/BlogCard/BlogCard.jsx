import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './BlogCard.module.scss';


const BlogCard = () => {
  return (
    <Card className={styles['blog-card-top']}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
    <Card.Body>
        <p className={styles['blog-info']}>22 Oct, 2020 / 246 Comments</p>
      <p className={styles['blog-desc']}>
      Lorem ipsum dolor sit consea. Nulla purus arcu
      </p>
    </Card.Body>
  </Card>
  )
}

export default BlogCard