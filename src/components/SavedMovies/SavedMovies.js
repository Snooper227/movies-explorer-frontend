import React from "react";
import { mainApi } from "../../utils/MainApi";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import useWindowInfo from "../../utils/WindowSize";
import faildImage from "../../images/failed.svg";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import "./SavedMovies.css";

function SavedMovies({ loggedIn, allMovies, onSave, onDelete, savedMovies }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [shotMovies, setShotMovies] = React.useState([]);
  const [longMovies, setLongMovies] = React.useState([]);
  const [searchRequest, setSearchRequest] = React.useState("");
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [tooltipData, setTooltipData] = React.useState({
    status: false,
    title: "",
  });
  const [moviesToMoreRender, setMoviesToMoreRender] = React.useState({
    current: 0,
    next: 0,
  });
  const { width } = useWindowInfo();

  React.useEffect(() => {
    setLongMovies(allMovies);
    setShotMovies(handleFilter(allMovies));
  }, [allMovies]);

  React.useEffect(() => {
    searchMovies();
    filterShotMovies();
  }, [searchRequest, isCheckboxActive]);

  React.useEffect(() => {
    resize();
  }, [width]);

  async function searchMovies() {
    setIsLoading(true);

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
          setLongMovies(moviesRender);
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
        movie.nameRU.toLowerCase().indexOf(c) !== -1 ||
        movie.nameEN.toLowerCase().indexOf(c) !== -1
      );
    });
  }

  function removeItem(_id) {
    const newArraySaved = allMovies.filter((c) => {
      if (_id === c.id) {
        return false;
      } else {
        return true;
      }
    });
    setLongMovies(newArraySaved);
    onDelete(_id);
  }

  function handleFilter(moviesArray) {
    return moviesArray.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  function filterShotMovies() {
    setShotMovies(handleFilter(longMovies));
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
        <section className="savedMovies">
          <SearchForm
            isActive={isActive}
            handleSearch={setSearchRequest}
            handleCheckbox={handleCheckbox}
            searchRequest={searchRequest}
            checkboxState={isCheckboxActive}
          />
          <MoviesCardList
            isLoading={isLoading}
            onSave={onSave}
            onDelete={removeItem}
            movies={
              !searchRequest
                ? isCheckboxActive
                  ? shotMovies
                  : allMovies
                : isCheckboxActive
                ? shotMovies
                : longMovies
            }
            limit={moviesToMoreRender.current}
            isSavedMovies={true}
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

export default SavedMovies;
