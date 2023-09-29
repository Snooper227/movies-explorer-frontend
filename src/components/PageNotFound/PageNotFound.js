import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const path = useNavigate();
  function goBack() {
    path(-1);
  }
  return (
    <section className="pageNotFound">
      <h1 className="pageNotFound__title">404</h1>
      <p className="pageNotFound__subtitle">Страница не найдена</p>

      <Link className="pageNotFound__button" onClick={goBack}>
        Назад
      </Link>
    </section>
  );
}
export default PageNotFound;
