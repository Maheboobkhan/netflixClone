import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import "../component/Row.css";

const Ntrending = ({ title, func }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fData = await axios.get(func);
    setMovies(fData.data.results);
  };

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie.title || movie.name)
        .then((url) => {
          console.log(movie.name);
          console.log("u: " + url);
          console.log("url: " + new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch(() => {
          console.log("temporarily unavailable");
        });
    }
  };

  window.addEventListener("click", () => setTrailerUrl(""));

  const opts = {
    height: "500px",
    width: "100%",

    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      {title}
      <div className="row-container">
        {movies.map((ele) => {
          {
            /* console.log(ele.poster_path); */
          }
          return (
            <img
              onClick={() => handleTrailer(ele)}
              className="row-img"
              src={`https://image.tmdb.org/t/p/w500/${ele.backdrop_path}`}
              alt="nothing"
            />
          );
        })}
      </div>
      {trailerUrl ? <Youtube videoId={trailerUrl} opts={opts} /> : ""}
    </div>
  );
};

export default Ntrending;
