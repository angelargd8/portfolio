import '../src/app/globals.css'
import styles from "../styles/circles.module.css";
import React, { useState } from 'react';


function Circles({ items }){
    return(
        <>        
        <div className={styles.Circles}>
            <div className={styles.CirclesContent}>
            {
                items.map((item, index) =>(
                        <div key={index} className={styles.Circle}>
                            <a href={item.href || '#'} target="_blank" rel="noopener noreferrer"> 
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

export default Circles;