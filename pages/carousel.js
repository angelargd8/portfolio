import '../src/app/globals.css'
import styles from "../styles/carousel.module.css";
import React, { useState } from 'react';
import { useRef } from 'react';

function Carousel({ items }){

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);

    const nextSlide = () => {
        console.log('Next Slide:', (currentIndex + 1) % items.length);
        setCurrentIndex((currentIndex) => (currentIndex + 1) % items.length);
    };
    const prevSlide = () => {
        console.log('Prev Slide:', (currentIndex - 1 + items.length) % items.length);
        setCurrentIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
    };
    return(
        <>        
        <div className={styles.Carousel}>
            <button onClick={prevSlide} className={`${styles.button} ${styles.prev}`}>Prev</button>
            <div className={styles.CarouselContent}>
            {/**  va a mostrar la imagen que coincida con index y current index*/
                items.map((item, index) =>(

                    index === currentIndex &&(
                        <div key={index}>
                        {/* {console.log('Index:', index)}
                        {console.log('curr Index:', currentIndex)} */}
                        <h2>{item.title}</h2>
                        <img 
                        src={item.image} 
                        alt={item.title} 
                        className={styles.Image}
                        ref={imageRef}
                        />
                        </div>
                    )

                    
                    
                ))
            }
            </div>
            <button onClick={nextSlide} className={`${styles.button} ${styles.next}`}>Next</button>
        </div>

        </>
    )
}

export default Carousel;