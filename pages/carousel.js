import '../src/app/globals.css'
import styles from "../styles/carousel.module.css";
import React, { useState } from "react";

function Carousel({ items }){

    const [currentIndex, setCurrentIndex] = useState(0);

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
            <button onClick={prevSlide} className={`${styles.button} ${styles.prev}`}>&lt;</button>
            <div className={styles.CarouselContent}>
            {/**  va a mostrar la imagen que coincida con index y current index*/
                items && items.map((item, index) =>(

                    index === currentIndex &&(
                        <div key={index} className={styles.Card}>
                            <div className={styles.IframeWrapper}>
                                {item.imageOnly ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={styles.Image}
                                        loading="lazy"
                                    />
                                ) : (
                                    <iframe 
                                        src={item.href} 
                                        title={item.title} 
                                        className={styles.Iframe}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </div>
                            <div className={styles.CardBody}>
                                <h3 className={styles.CardTitle}>{item.title}</h3>
                                <p className={styles.CardDescription}>{item.description}</p>
                                <a
                                    className={styles.CardButton}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit project
                                </a>
                            </div>
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
