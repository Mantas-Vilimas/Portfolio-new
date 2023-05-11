import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Layout from "../../composition/Layout/Layout";
import styles from "./ContactPage.module.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useContext, useEffect, useRef, useState } from "react";
import LightImage from "./LightImage/LightImage";
import DarkImage from "./DarkImage/DarkImage";
import ThemeContext from "../../ThemeContext";
import Block from "../../components/Block/Block";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string("Email should be made of letters")
    .email("Provide a valid email address")
    .required("Email address is required"),
  name: yup
    .string("Name should be a string")
    .required("You must enter your Name"),
  message: yup
    .string("Name should be a string")
    .required("You must enter your message"),
});

const ContactPage = () => {
  const [success, setSuccess] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { themeGlobal } = useContext(ThemeContext);
  const form = useRef();

  const onSubmit = (data) => {
    if (data.email && data.name && data.message) {
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
      setSuccess("Thank you for your message");
      reset();
    }
  };

  useEffect(() => {
    if (!success) {
      return;
    }

    const clearSucces = () => {
      setSuccess("");
    };

    setTimeout(clearSucces, 10 * 500);
  }, [success]);

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
          {success && <h4>Thank you for your message</h4>}
          <h4 className={styles.success}>Thank you for your message!</h4>
          <form
            ref={form}
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.inputs}>
              <div className={styles.first}>
                <Input
                  label="Email:"
                  type="email"
                  forHtml="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  register={register}
                  errors={errors}
                />
                <Input
                  label="Name:"
                  type="text"
                  forHtml="name"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  register={register}
                  errors={errors}
                />
              </div>
              <div className={styles.second}>
                <label className={styles.label} htmlFor={"message"}>
                  Your Message:
                </label>
                <textarea
                  className={styles.text}
                  {...register("message")}
                  id="message"
                  name="message"
                  placeholder="Let me know what you think"
                ></textarea>
                {errors["message"] ? (
                  <span className={styles.message}>
                    {errors["message"].message}
                  </span>
                ) : (
                  <></>
                )}
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
