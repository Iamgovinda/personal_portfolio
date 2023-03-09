import React, { useEffect, useState } from 'react';
import styles from './AddBlog.module.scss';

import { useParams } from 'react-router-dom';
import { get } from '../../API/axios';
import { Container } from '@mui/material';


import Editor2 from '../Editor/Editor2';


const AddBlog = () => {
  const { uuid } = useParams();
  const [data, setData] = useState();
  const [blog, setBlog] = useState();
  useEffect(() => {
    get(`/blog/${uuid}`).then((response) => {
      if (response.status === 200) {
        setData(JSON.parse(response.data?.content));
        setBlog(response?.data);
      }
    })
  }, [])
  return (
    <>
      <Container>
        <div className={styles['add-blog']}>
          <Editor2 content={data} uuid={uuid} data={blog}/>
        </div>
      </Container>
    </>
  )
}

export default AddBlog