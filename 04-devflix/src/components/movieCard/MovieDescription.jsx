import { useEffect, useState } from "react";
import styles from "./MovieDescription.module.css";

const MovieDescription = (props) => {
  const [movieDesc, setMoviesDesc] = useState([]);
  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieID}`)
      .then((Response) => Response.json())
      .then((data) => setMoviesDesc(data));
  }, []);
  console.log(movieDesc);
  return (
    <div className={styles.modalBackdrop} onClick={props.Click}>
        <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movieDesc.Poster} alt="" />
          <button className={styles.btnClose}
          onClick={props.Click}
          >x</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
