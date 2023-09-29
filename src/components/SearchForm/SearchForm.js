import { useEffect } from "react";
import useValidation from "../../utils/useValidation";
import "./SearchForm.css";

function SearchForm({
  isActive,
  handleSearch,
  handleCheckbox,
  searchRequest,
  checkboxState,
}) {
  const { values, handleChange, errors, isValid, resetForm } = useValidation();
  const { movietitle } = values;

  function handleIsActive() {
    handleCheckbox(!checkboxState, !isActive);
  }
  useEffect(() => {
    resetForm({ movietitle: searchRequest });
  }, [searchRequest]);

  function handelSearch(evt) {
    evt.preventDefault();

    handleSearch(movietitle);
  }

  return (
    <section className="searchForm">
      <form
        className="searchForm__container"
        onSubmit={handelSearch}
        noValidate
      >
        <input
          className="searchForm__input"
          name="movietitle"
          placeholder="Фильм"
          value={values.movietitle || ""}
          onChange={handleChange}
          minLength="1"
          maxLength="30"
          pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
          required
        ></input>
        <button
          className={`searchForm__button ${
            !isValid && errors ? "searchForm__button_disabled" : ""
          }`}
          type="submit"
          disabled={!isValid}
        >
          Поиск
        </button>
      </form>
      <span
        className={`searchform__error ${
          !isValid && errors.movietitle ? "searchform__error-active" : ""
        }`}
        id="searchForm-error"
      >
        {errors.movietitle || ""}
      </span>
      <div className="searchForm__checkbox">
        <button
          className={
            !isActive
              ? "searchForm__checkbox-button"
              : "searchForm__checkbox-button searchForm__checkbox-button-active"
          }
          type="submite"
          onClick={handleIsActive}
        ></button>
        <p className="searchForm__checkbox-text">Короткометражки</p>
      </div>
    </section>
  );
}
export default SearchForm;
