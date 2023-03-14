import React from "react";
import UserInfo1 from "../../components/UserInfo/UserInfo1";
import styles from "./Home.module.scss";
import WhatIDo from "../WhatIDo/WhatIDo";
import Resume from "../Resume/Resume";
import TestimonialLayout from "../Testimonial/TestimonialLayout";
import ClientLayout from "../ClientLayout/ClientLayout";
import BlogLayout from "../Blog/Blog";
import Contact from "../../components/Contact/Contact";
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../../API/axios";
import { useUserContext } from "../../context/UserContext";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [Error, isError] = useState(false);
  const [userAbout, setUserAbout] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [resume, setResume] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [client, setClient] = useState([]);

  const {setUserData} = useUserContext();



  useEffect(()=>{
    if(isLoading){
      get(`/user/about/`).then((response)=>{
        if(response.status===200){
          setUserAbout(response.data.results);
          setIsLoading(false);
        }
      })
      get(`/user/info/`).then((response)=>{
        if(response.status===200){
          setUserInfo(response.data.results);
          setIsLoading(false);
          setUserData(response.data?.results?.[0]);
        }
      })
      get(`/resume/`).then((response)=>{
        if(response.status===200){
          setResume(response.data);
          setIsLoading(false);
        }
      })

      get(`/testimonial/`).then((response)=>{
        if(response.status===200){
          setTestimonial(response.data.results);
          setIsLoading(false);
        }
      })

      get(`/client/`).then((response)=>{
        if(response.status===200){
          setClient(response.data.results);
          setIsLoading(false);
        }
      })
    }
  }, [isLoading])
  return (
    <>
      <div className={styles["parent"]}>
        <UserInfo1 data={userInfo} about={userAbout} loading={isLoading}/>
        <div className={styles["blur"]}></div>
        <div className={styles["blur2"]}></div>
        <div className={styles["blur3"]}></div>
      </div>
      <WhatIDo email={userInfo[0]?.email}/>
      <Resume data={resume} loading={isLoading}/>
      <BlogLayout loading={isLoading}/>
      <TestimonialLayout data={testimonial} loading={isLoading}/>
      {
      client && <ClientLayout data={client}/>
      }
      <Contact data={userInfo} about={userAbout}/>
    </>
  );
};

export default Home;
