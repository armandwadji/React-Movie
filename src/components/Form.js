import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("marvel");

  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0d35c2af84390857eb8ff45e611f310d&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onInput={(e) => setSearch(e.target.value)}
          />
          <input
            type="submit"
            value="rechercher"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn_sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top <span>&#8594;</span>
          </div>
          <div
            className="btn_sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop <span>&#8594;</span>
          </div>
        </div>
      </div>

      <div className="result">
        {moviesData
          .slice(0, 24)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
            return "";
          })
          .map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
