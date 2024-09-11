import '../src/app/globals.css'
import styles from "../styles/navigationbar.module.css";
function NavBar(){
    return(
        <>
        <div className={styles.navbar} >
          <a href="/">Home</a>
          <a href="/aboutme">About me</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
        </div>
        </>
    )
}

export default NavBar;