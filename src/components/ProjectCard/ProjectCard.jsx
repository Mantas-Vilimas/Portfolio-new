
import styles from "./ProjectCard.module.css"
import Button from "../Button/Button";

const ProjectCard = ({img, label, id}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt="project" />
      </div>
      <div className={styles.content}>
        <p>{label}</p>
        <Button link={id.toString()} label={"About Project"} color={"light"} />
      </div>
    </div>
  );
};

export default ProjectCard
