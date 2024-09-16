import '../src/app/globals.css'
import styles from "../styles/circles.module.css";
import React from 'react';
import Image from 'next/image';

function Circles({ items }){
    
    const backgroundColors= ['#0175b7','#7c2fa0','#d2473d','#e83d59',]

    return(
        <>        
        <div className={styles.CirclesContainer}>
            <div className={styles.CirclesContent}>
            {
                items && items.map((item, index) =>(
                    <a  key={index} href={item.href || '#'} target="_blank" rel="noopener noreferrer" className={styles.a} > 
                        <div className={styles.Circle} style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                            
                            <div className={styles.ImageContainer}>
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    className={styles.Image}
                                    width={50}
                                    height={50}
                                />
                            </div>
                           
                        </div>
                    </a>
                ))
            }
            </div>
        </div>

        </>
    )
}

export default Circles;