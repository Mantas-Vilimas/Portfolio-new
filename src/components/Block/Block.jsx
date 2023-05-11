import { useState} from "react";
import Layout from "../../composition/Layout/Layout";
import styles from "./Block.module.css"
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";

const Block = () => {
    const [joke, setJoke] = useState(    {
        id: 385,
        type: "programming",
        setup: "Why did the programmer quit his job?",
        punchline: "Because he didn’t get arrays"
      })

    const [loading, setlaoding] = useState(false)

    const url = "https://official-joke-api.appspot.com/random_joke";

    const loadJoke = async ()=> {
        setlaoding(true)
        const request = await fetch(url).then((response) => response.json());
        setJoke(request)
        setlaoding(false)
    }


    return (
      <section id="social" >

        <Layout>
          <div className={styles.container}>
            
              <p className={styles.heading}>{joke.setup}</p>
           
            
              <p className={styles.text}>
               {joke.punchline}
              </p>
            
            <div className={styles.button}>
                {loading ? <Spinner/> :  <Button label={"Next Joke"} color={"light"} onClick={loadJoke}/> }
             
            </div>
          </div>
        </Layout>
      </section>
    );
  };
  
  export default Block;