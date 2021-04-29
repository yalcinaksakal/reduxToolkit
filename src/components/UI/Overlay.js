import styles from "./Overlay.module.css";

const Overlay = props => (
  <div className={styles.overlay} onClick={props.clicked}></div>
);

export default Overlay;
