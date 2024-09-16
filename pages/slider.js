import '../src/app/globals.css'
import styles from "../styles/slider.module.css";
import React, { useState } from 'react';

function Slider({ items }){
    return(
        <>        
        <div className={styles.Slider}>
            <div className={styles.SliderContent}>
            {
                items.map((item, index) =>(
                        <div key={index} className={styles.inner} >
                        {/* <h2>{item.title}</h2> */}
                        <a href={item.href || '#'} target="_blank" rel="noopener noreferrer" className={styles.a} > 
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className={styles.Image} 
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