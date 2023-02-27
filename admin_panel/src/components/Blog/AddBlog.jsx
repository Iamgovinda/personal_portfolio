import React, { useEffect, useState } from 'react';
import styles from './AddBlog.module.scss';

import { useParams } from 'react-router-dom';
import { get } from '../../API/axios';
import exampleData from '../Editor/myEditor/exampledata';
import { Container } from '@mui/material';
// import { Button } from '@mui/material';
import Editor from '../Editor/myEditor/editor';

// import Editor from '../Editor/Editor';


const AddBlog = () => {
  const { uuid } = useParams();
  const [data, setData] = useState({ "ok": "NOtdj" });
  // console.log("Blog Data: ", JSON.stringify(exampleData));
  useEffect(() => {
    get(`/blog/${uuid}`).then((response) => {
      if (response.status === 200) {
        console.log("Is this the data from database: ", response.data?.content);
        setData(JSON.parse(response.data?.content));
      }
    })
  }, [])
  return (
    <>
      <Container>
        <div className={styles['add-blog']}>
          {/* <Editor content={data} uuid={uuid}/> */}
          <Editor data={data} setData={setData} data2={exampleData} />
        </div>
      </Container>
    </>
  )
}

export default AddBlog