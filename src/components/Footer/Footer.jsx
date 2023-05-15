import {Link} from "react-router-dom"
import Layout from "../../composition/Layout/Layout"
import styles from "./Footer.module.css"
import {routes} from "../../constants/routes"
import {HashLink} from "react-router-hash-link"

const Footer = () => {
    return <footer className={styles.footer}>
        <Layout>
        <div className={styles.content}>
          <div>
            <HashLink to={"/#hero"} className={styles.logo}/>
          </div>
          <p className={styles.moto}>
            Living, learning, & leveling up one day at a time.
          </p>

          <ul className={styles.contacts}>
            <li className={styles.container}>
              <Link className={`${styles.link} ${styles.facebook}`} target="_blank" to={"https://www.facebook.com/MantasVilimas300/"}></Link>
              
            </li>
            <li className={styles.container}>
            <Link className={`${styles.link} ${styles.linkedin}`} target="_blank" to={"https://www.linkedin.com/in/mantas-vilimas/"}></Link>
        
            </li>
            <li className={styles.container}>
            <Link className={`${styles.link} ${styles.github}`} target="_blank" to={"https://github.com/Mantas-Vilimas"}></Link>
            </li>
            <li className={styles.container}>
            <Link className={`${styles.link} ${styles.email}`} to={routes.contact}></Link>
            </li>
          </ul>

          <p className={styles.copyright}>Handcrafted by me &copy; twentytwotwentythree</p>
        </div>
        </Layout>
       
    </footer>
}


export default Footer