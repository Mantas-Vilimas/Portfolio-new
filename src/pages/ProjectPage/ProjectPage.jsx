import { useParams } from "react-router-dom";
import { projectsList } from "../../projects/projectsList";
import styles from "./ProjectPage.module.css"

const ProjectPage = () => {
  const { id } = useParams();
  const project =
    projectsList.find((project) => project.id === Number.parseInt(id)) || {};


  return (
    <section className={styles.main}>
      <div>{project.label}</div>
      <div>{project.description}</div>
      <div>{project.id}</div>
    </section>
  );
};

export default ProjectPage;
