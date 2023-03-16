import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from './BlogPage.module.scss';
import BlogSkeleton from './BlogSkeleton';

const BlogPageSkeleton = (props) => {
    return (
        <>
            {
                [1, 2, 3].map((item, index) => {
                    return (
                        <>
                            <BlogSkeleton color={'white'} />
                        </>
                    )
                })
            }
        </>
    )
}

export default BlogPageSkeleton