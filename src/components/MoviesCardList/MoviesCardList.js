import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
function MoviesCardList({ isSave }) {
  return (
    <>
      <section className="moviesCardList">
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
        <MoviesCard isSave={isSave} />
      </section>
      <section className="moviesCardList__add">
        <button className="moviesCardList__button" type="button">
          Еще
        </button>
      </section>
    </>
  );
}

export default MoviesCardList;
