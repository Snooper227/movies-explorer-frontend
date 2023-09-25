import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import faildImage from "../../images/failed.svg";
import useWindowInfo from "../../utils/WindowSize";
import "./Movies.css";

function Movies({ loggedIn, savedMovies, allMovies, onSave, onDelete }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [shotMovies, setShotMovies] = React.useState([]);
  const [longMovies, setLongMovies] = React.useState([]);
  const [searchRequest, setSearchRequest] = React.useState("");
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [moviesToMoreRender, setMoviesToMoreRender] = React.useState({
    current: 0,
    next: 0,
  });
  const { width } = useWindowInfo();
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [tooltipData, setTooltipData] = React.useState({
    status: false,
    title: "",
  });

  React.useEffect(() => {
    searchMovies();
    filterShotMovies();
  }, [searchRequest, isCheckboxActive]);

  React.useEffect(() => {
    checkLastRequest();
  }, []);

  React.useEffect(() => {
    resize();
  }, [width]);

  async function searchMovies() {
    setIsLoading(true);
    setLongMovies([]);
    try {
      if (searchRequest.length > 0) {
        const moviesRender = await handleSearch(allMovies, searchRequest);

        if (moviesRender.length === 0) {
          setTooltipData({
            status: true,
            title: "Not Found",
          });
          setIsTooltipOpen(true);
        } else {
          setRequestLocalStorage("lastRequest", searchRequest);
          setRequestLocalStorage("lastRequestedMovies", moviesRender);
          setLongMovies(moviesRender);
          setRequestLocalStorage("checkboxState", isCheckboxActive);
        }
      }
      return;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      const c = keyword.toLowerCase().trim();
      return (
        movie.nameRu.toLowerCase().indexOf(c) !== -1 ||
        movie.nameEn.toLowerCase().indexOf(c) !== -1
      );
    });
  }

  function handleFilter(moviesArray) {
    return moviesArray.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  function filterShotMovies() {
    setShotMovies(handleFilter(longMovies));
  }

  function setRequestLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function checkLastRequest() {
    const lastMovies = localStorage.getItem("lastRequestedMovies");
    if (lastMovies) {
      setLongMovies(getLastRequestLocalStorage("lastRequestedMovies"));
    }
    const lastRequestKeyword = localStorage.getItem("lastRequest");
    if (lastRequestKeyword) {
      setSearchRequest(getLastRequestLocalStorage("lastRequest"));
    }
    const lastRequestCheckboxState = localStorage.getItem("checkboxState");
    if (lastRequestCheckboxState) {
      setIsCheckboxActive(getLastRequestLocalStorage("checkboxState"));
    }
    return;
  }

  function getLastRequestLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function handleCheckbox(value) {
    setActive(value);
    setIsCheckboxActive(value);
  }

  function resize() {
    if (width >= 1020) {
      setMoviesToMoreRender({ current: 12, next: 3 });
    } else if (width < 690) {
      setMoviesToMoreRender({ current: 5, next: 2 });
    } else {
      setMoviesToMoreRender({ current: 8, next: 2 });
    }
  }

  function handleMoreMovies() {
    setMoviesToMoreRender({
      current: moviesToMoreRender.current + moviesToMoreRender.next,
      next: moviesToMoreRender.next,
    });
  }
  function closeAllPopups() {
    setIsTooltipOpen(false);
  }
  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="movies">
          <SearchForm
            handleSearch={setSearchRequest}
            isActive={isActive}
            handleCheckbox={handleCheckbox}
            searchRequest={searchRequest}
            checkboxState={isCheckboxActive}
          />
          <MoviesCardList
            isLoading={isLoading}
            onSave={onSave}
            onDelete={onDelete}
            movies={isCheckboxActive ? shotMovies : longMovies}
            limit={moviesToMoreRender.current}
            isSavedMovies={false}
            savedMovies={savedMovies}
            onClick={handleMoreMovies}
          />
          <InfoTooltip
            isOpen={isTooltipOpen}
            title={tooltipData.title}
            onClose={closeAllPopups}
            onOverlayClick={handleOverlayClick}
            image={faildImage}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
