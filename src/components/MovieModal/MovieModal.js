import React from "react";
import "./MovieModal.css";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            className="modla__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title ? title : name}
          />
          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">100% for you</span>
              {release_date ? release_date : first_air_date}
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview">평점 : {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
