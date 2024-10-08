import '../src/app/globals.css'
import styles from "../styles/carousel.module.css";
import React, { useState } from "react";
import { useRef } from 'react';
import Image from 'next/image';

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
    const handleIframeClick = (href) => {
        window.open(href, '_blank');
    };
    return(
        <>        
        <div className={styles.Carousel}>
            <button onClick={prevSlide} className={`${styles.button} ${styles.prev}`}>&lt;</button>
            <div className={styles.CarouselContent}>
            {/**  va a mostrar la imagen que coincida con index y current index*/
                items && items.map((item, index) =>(

                    index === currentIndex &&(
                        <div key={index} >
                        <h2>{item.title}</h2>
                        <a href={item.href || '#'} target="_blank" rel="noopener noreferrer"> 
                            <Image 
                                src={item.image} 
                                alt={item.title} 
                                className={styles.Image} 
                                ref={imageRef} 
                                width={500}
                                height={500}
                            />
                            <div className={styles.IframeContainer} onClick={() => handleIframeClick(item.href)} >
                            <iframe 
                                src={item.href} 
                                title={item.title} 
                                className={styles.Iframe}
                                width="1000" 
                                height="500"
                            ></iframe>
                            <button className={styles.IframeButton}  onClick={() => handleIframeClick(item.href)}>Visita el proyecto</button>
                            </div>
                            
                        </a>
                        </div>
                    )
                ))
            }
            </div>
            <button onClick={nextSlide} className={`${styles.button} ${styles.next}`}>&gt;</button>
        </div>

        </>
    )
}

export default Carousel;