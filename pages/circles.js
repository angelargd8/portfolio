import '../src/app/globals.css'
import styles from "../styles/circles.module.css";
import React from 'react';


function Circles({ items }){
    
    const backgroundColors= ['#0175b7','#7c2fa0','#d2473d','#e83d59',]

    return(
        <>        
        <div className={styles.CirclesContainer}>
            <div className={styles.CirclesContent}>
            {
                items.map((item, index) =>(
                    <a href={item.href || '#'} target="_blank" rel="noopener noreferrer" className={styles.a} > 
                        <div key={index} className={styles.Circle} style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                            
                            <div className={styles.ImageContainer}>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className={styles.Image} 
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