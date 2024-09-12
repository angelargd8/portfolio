import '../src/app/globals.css'
import styles from "../styles/carousel.module.css";
import React, { useState } from 'react';

function Carousel({ items }){

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }

    return(
        <>        
        <div className={styles.Carousel}>
            <button onClick={prevSlide} className={styles.button}>Previous</button>
            <div className={styles.CarouselContent}>
                {items.map((item, index) => (
                    <div key={index} className={index === currentIndex ? styles.active : styles.slide}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide} className={styles.button}>Next</button>
        </div>

        </>
    )
}

export default Carousel;