import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Cards from "../components/Cards";
import Header from "../components/Header";

const UserLists = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    for (let i of moviesId) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${i}?api_key=0d35c2af84390857eb8ff45e611f310d&language=fr-FR&external_source=imdb_id`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        coup de coeur <span>❤️</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Cards key={movie.id} movie={movie} />)
        ) : (
          <h2>Aucun coups de coeurs pour le mooment </h2>
        )}
      </div>
    </div>
  );
};

export default UserLists;
