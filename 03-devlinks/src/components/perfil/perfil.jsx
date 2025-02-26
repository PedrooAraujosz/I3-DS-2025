import styles from "./perfil.module.css";

const Perfil = ({ children, fotoperfi }) => {
  return (
    <div id={styles.perfil}>
        <img src={fotoperfi} alt=""/>
        <p> {children} </p>
    </div>
  );
};

export default Perfil;