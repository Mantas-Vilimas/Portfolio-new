import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  forHtml,
  id,
  name,
  placeholder,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className={`${styles.inputContainer}`}>
      {label && (
        <label className={styles.label} htmlFor={forHtml}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} `}
        {...register(name)}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors[name] ? (
        <span className={styles.message}>{errors[name].message}</span>
      ) : (
        <span className={styles.message}>{""}</span>
      )}
      
    </div>
  );
};

export default Input;
