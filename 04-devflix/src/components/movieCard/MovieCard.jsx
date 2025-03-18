import { useState } from "react";
import styles from "./MovieCard.module.css";
import MovieDescription from "./MovieDescription";

const MovieCard = (props) => {
  const [ismodalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!ismodalOpen);
  };

  return (
    <>
      <div className={styles.movie} onClick={toggleModal} >
        <div>
          <p>{props.Year}</p>
        </div>
        <div>
          <img src={props.Poster} alt="" />
        </div>
        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>
      {ismodalOpen && (
        <MovieDescription
         Click={toggleModal}
         apiUrl={props.apiUrl}
          movieID={props.imdbID}
           />
      )}
    </>
  );
};

export default MovieCard;
