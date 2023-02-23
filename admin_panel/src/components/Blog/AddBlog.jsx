import React from 'react';
import styles from './AddBlog.module.scss';

import Editor from '../Editor/Editor';

const AddBlog = () => {
  return (
    <div className={styles['add-blog']}>
        <Editor />
    </div>
  )
}

export default AddBlog