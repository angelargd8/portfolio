import '../src/app/globals.css'
import styles from "../styles/slider.module.css";
import React from 'react';
import Image from 'next/image';

function Slider({ items }){
    return(
        <>        
        <div className={styles.Slider}>
            <div className={styles.SliderContent}>
            {
                items && items.map((item, index) =>(
                        <div key={index} className={styles.inner} >
                        {/* <h2>{item.title}</h2> */}
                        <a href={item.href || '#'} target="_blank" rel="noopener noreferrer" className={styles.a} > 
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                className={styles.Image} 
                                width={90}
                                height={90}
                            />
                         </a>
                        </div>
                ))
            }
            </div>
        </div>

        </>
    )
}

export default Slider;