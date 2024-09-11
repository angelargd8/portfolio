import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
            <div className={styles.ContainerImagen}>&nbsp;
            <Image
              src="/pics/4.jpg"
              alt="imagen"
              layout="responsive"
              width={500}
              height={50}
              className={styles.animatedImage}
              ></Image>
            </div>
            <div className={styles.ContainerTitle}>
              <h1 className={styles.title}>Port</h1>
              <h1 className={styles.title}>folio.</h1> 
            </div>
            

      </main>
      
    </div>
  );
}
