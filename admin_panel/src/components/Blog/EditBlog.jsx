import React, { useEffect, useState } from 'react';
import styles from './AddBlog.module.scss';

import { useParams } from 'react-router-dom';
import { get } from '../../API/axios';
import { Container } from '@mui/material';

import Editor from '../Editor/Editor';


const EditBlog = () => {
  const { uuid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    get(`/blog/${uuid}`).then((response) => {
      if (response.status === 200) {
        setData(JSON.parse(response.data?.content));
      }
    })
  }, [])
  return (
    <>
      <Container>
        <div className={styles['add-blog']}>
          <Editor content={data} uuid={uuid}/>
        </div>
      </Container>
    </>
  )
}

export default EditBlog