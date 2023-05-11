import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Layout from "../../composition/Layout/Layout";
import styles from "./ContactPage.module.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import LightImage from "./LightImage/LightImage";
import DarkImage from "./DarkImage/DarkImage";
import ThemeContext from "../../ThemeContext";
import Block from "../../components/Block/Block";

const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const { themeGlobal } = useContext(ThemeContext);
  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);

    emailjs
      .sendForm(
        "service_e1dizsw",
        "template_83saozj",
        form.current,
        "TQLXOo4m0E__qEpQH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Layout>
        <section className={styles.container}>
          <h3 className={styles.heading}>
            Thanks for taking the time to reach out. How can I help you today?
          </h3>
          <div className={styles.image}>
            {themeGlobal === "dark" ? <DarkImage /> : <LightImage />}
          </div>

          <form
            ref={form}
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.inputs}>
              <div className={styles.first}>
                <Input
                  label={"Email:"}
                  type={"email"}
                  forHtml={"email"}
                  id={"email"}
                  name={"email"}
                  placeholder={"Enter your email address"}
                  register={register}
                />
                <Input
                  label={"Name:"}
                  type={"text"}
                  forHtml={"name"}
                  id={"name"}
                  name={"name"}
                  placeholder={"Enter your name"}
                  register={register}
                />
              </div>
              <div className={styles.second}>
                <label className={styles.label} htmlFor={"message"}>Your Message:</label>
                <textarea
                  className={styles.text}
                  {...register("message")}
                  id={"message"}
                  name="message"
                ></textarea>
              </div>
            </div>

            <Button label={"Send Email"} color={"dark"} />
          </form>
        </section>
      </Layout>
      <Block />
    </div>
  );
};

export default ContactPage;
