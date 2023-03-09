import React from 'react';
import styles from './TestimonialCard.module.scss';
import { Icon } from '@iconify/react';
const Testimonial = (props) => {
    return (
        <>
            <div className={styles["t-item"]} id='testimonial'>
                <div className={styles["t-content"]}>
                    <div className={styles["t-picture-box"]}>
                        {
                            (props?.data?.image?.file)?(<>
                                <img src={props?.data?.image?.file} alt="" className={styles['t-picture']} />
                            </>):(
                                <>
                                    <div className={styles["initials"]}>
                                        <p className={styles['initials-text']}>{props?.data?.name?.split(" ").map((word => word[0].toUpperCase())).join("")}</p>
                                    </div>
                                </>
                            )

                        }
                    </div>
                    <div className={styles["t-text"]}>
                        <p>
                            {props?.data?.desc}
                        </p>
                    </div>
                    <div className={styles["t-author-info"]}>
                        <Icon icon="mdi:format-quote-open" fontSize={25} color='gray'/>
                        <p className={styles['t-author']}>{props?.data?.name}</p>
                        <p className={styles["t-author-firm"]}>{props?.data?.company}</p>
                    </div>
                    <div className={styles["quote-icon-box"]}>
                        <Icon icon="material-symbols:format-quote" className={styles['quote-icon']} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial