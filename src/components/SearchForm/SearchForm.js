import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ value, onChange }) {
  const [isActive, setActive] = useState(false);
  function handleIsActive() {
    setActive(!isActive);
  }
  return (
    <section className="searchForm">
      <form className="searchForm__container">
        <input className="searchForm__input" placeholder="Фильм"></input>
        <button className="searchForm__button">Поиск</button>
      </form>
      <div className="searchForm__checkbox">
        <button
          className={
            !isActive
              ? "searchForm__checkbox_button"
              : "searchForm__checkbox_button searchForm__checkbox_button_active"
          }
          type="button"
          onClick={handleIsActive}
        ></button>
        <p className="searchForm__checkbox_text">Короткометражки</p>
      </div>
      {/* <label className="searchForm__checkbox-google">
                <input className='searchForm__checkbox_input' type="checkbox" />
                <span className="searchForm__checkbox-google-switch"></span>
                <p className='searchForm__text'>Короткометражки</p>
            </label> */}
    </section>
  );
}
export default SearchForm;
