import {Link} from "react-router-dom";
import Layout from "../../composition/Layout/Layout";
import styles from "./CallToAction.module.css";
import {routes} from "../../constants/routes";

const CallToAction = () => {
  return (
    <section id="social" >
      <Layout>
        <div className={styles.container}>
          
            <p className={styles.heading}>Start a poject</p>
         
          
            <p className={styles.text}>
              Interested in working together? We should queue up a time to chat.
              I’ll buy the coffee.
            </p>
          
          <div className={styles.button}>
            <Link className={styles.link} to={routes.contact}>Let's contact</Link>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default CallToAction;
