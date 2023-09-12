import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
function MoviesCardList() {
  return (
    <>
      <section className="moviesCardList">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
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
