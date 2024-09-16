import '../src/app/globals.css'
import styles from "../styles/skills.module.css";
import NavBar from "./navigationbar";
import Slider from './slider';
import React from "react";

function Skills(){
    const itemsBackend = [
        { 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png", 
            title: 'Python',
            href: 'https://www.python.org/',
        },
        { 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUaDjGczuu5b038vjXDstYNwIUtEc7rS3Fw&s', 
            title: 'java', 
            href: 'https://www.java.com/es/',
        },
        
        { 
            image: 'https://i.pinimg.com/originals/79/c5/1d/79c51d0e3a3f60b504da6bcc20ab1afc.jpg', 
            title: 'nodejs',
            href: 'https://nodejs.org/es/',
        },
        { 
            image: 'https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png', 
            title: 'Express',
            href: 'https://expressjs.com/es/',
        },
        { 
            image: 'https://seeklogo.com/images/E/elephpant-mascot-php-logo-4C78D1AC4E-seeklogo.com.png?v=638245916460000000', 
            title: 'Php',
            href: 'https://www.php.net/',
        },
    ];
    const itemsFront = [
        { 
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
            title: 'JavaScript',
            href: 'https://www.javascript.com/',
        },
        { 
            image: 'https://img.icons8.com/?size=512&id=21278&format=png', 
            title: 'css', 
            href: 'https://developer.mozilla.org/es/docs/Web/CSS',
        },
        
        { 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s', 
            title: 'html',
            href: 'https://developer.mozilla.org/es/docs/Web/HTML',
        },
        { 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4XOdTwDFjrNDoRbCH2vDqCNCKD9u8zVr_g&s', 
            title: 'vite+react',
            href: 'https://vitejs.dev/',
        },
        { 
            image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', 
            title: 'React',
            href: 'https://es.reactjs.org/',
        },
        { 
            image: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png', 
            title: 'nextjs',
            href: 'https://nextjs.org/',
        },
        { 
            image: 'https://itproger.com/img/tests/1567591805.svg', 
            title: 'kotlin',
            href: 'https://kotlinlang.org/',
        },
    ];
    const itemsDB = [
        { 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png", 
            title: 'postgresql',
        },
        { 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9UXfrx8TWM7eyKB1jdIk66ZoGVmTtqWjKQ&s', 
            title: 'mysql', 
        },
        
        { 
            image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/oracle_original_logo_icon_146401.png', 
            title: 'oracle',
        },
        { 
            image: 'https://www.freeiconspng.com/thumbs/phpmyadmin-icon/phpmyadmin-icon-6.png', 
            title: 'phpmyadmin',
        },
        { 
            image: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png', 
            title: 'mariaDB',
        },
    ];
    return(
        <>        
        <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Skills</h1>
        </div>
        <div className={styles.ContainerSkills}>
            <h2 className={styles.subtitle}>Backend</h2>
            <Slider items = {itemsBackend} />
            
            <h2 className={styles.subtitle}>Frontend</h2>
            <Slider items = {itemsFront} />

            <h2 className={styles.subtitle}>Base de datos</h2>
            <Slider items = {itemsDB} />

        </div>
        <NavBar/>
        </>
    )
}

export default Skills;