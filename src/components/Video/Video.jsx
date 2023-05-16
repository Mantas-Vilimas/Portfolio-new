import styles from "./Video.module.css"

const Video = ({embedId}) => {
    return <div className={styles.videoContainer}>
        <iframe className={styles.video}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
}

export default Video