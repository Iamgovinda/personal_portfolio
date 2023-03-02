import React, { useState } from 'react';
import Output from 'editorjs-react-renderer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../API/axios';
import CodeBlock from './Renderers';
import { Container } from 'react-bootstrap';
import styles from './BlogView.module.scss';
import { Icon } from '@iconify/react';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
const BlogView = (props) => {
  const [blog, setBlog] = useState([]);
  const [blogData, setBlogData] = useState();
  const { uuid } = useParams();
  useEffect(() => {
    console.log("Inside log");
    get(`/blog/${uuid}/`).then((response) => {
      console.log("HEllo, ", response);
      if (response.status === 200) {
        setBlog(response?.data);
        setBlogData(JSON.parse(response?.data?.content));
      }
    })
  }, [])
  console.log("This is blogData: ", blog?.written_by);
  return (
    <>
      <Container className={styles['container']}>
        <h1 className={styles["top"]}>
          {blog?.title}
        </h1>
        <p className={styles['blog-info']}><Icon icon="arcticons:writeilypro" style={{ fontSize: '1.2rem', fontWeight: 'bold' }} /> {blog?.written_by + ' | ' + blog?.publish_date}</p>
        <div className={styles["content"]}>
          <Output data={blogData ?? "dfsk"} className={styles['output']} />
        </div>
      </Container>
    </>
  )
}

export default BlogView