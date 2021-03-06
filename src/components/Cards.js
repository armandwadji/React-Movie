import React from "react";

const Cards = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");

    return [dd, mm, yy].join("/");
  };

  const genreFinder = (genre) => {
    let genreArray = [];

    for (let i of genre) {
      // console.log(i);
      switch (i) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }

    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.some((e) => parseInt(e) === parseInt(movie.id))) {
      storedData.push(movie.id);
      window.localStorage.movies = storedData;

      // console.log(storedData);
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter(
      (id) => parseInt(id) !== parseInt(movie.id)
    );

    window.localStorage.movies = newData;
    window.location.reload();
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "./img/poster.jpg"
        }
        alt={`affiche de ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>Sortie le : {dateFormater(movie.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {movie.vote_average}/10 <span>⭐️</span>
      </h4>
      <ul>
        {movie.genre_ids
          ? genreFinder(movie.genre_ids)
          : movie.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      {movie.overview ? <h3>Synopsis</h3> : ""}
      <p>{movie.overview}</p>

      {movie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          Ajouter aux coups de coeur
        </div>
      ) : (
        <div className="btn" onClick={() => deleteStorage()}>
          Supprimer de la liste
        </div>
      )}
    </div>
  );
};

export default Cards;
