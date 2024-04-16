import React, { useEffect, useState } from "react";
import "../component/Noriginal.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "axios";
import { sended } from "./Banner";

const Noriginal = ({ title, func }) => {
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
    console.log("this: " + sended.thisKey);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie.original_name)
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
    <div className="original">
      {title}
      <div className="original-container">
        {movies.map((ele) => {
          return (
            <img
              key={ele.id}
              onClick={() => handleTrailer(ele)}
              className="original-img"
              src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`}
              alt="nothing"
            />
          );
        })}
      </div>
      {/* {console.log("trailer: " + trailerUrl)} */}
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
      {trailerUrl ? <Youtube videoId={trailerUrl} opts={opts} /> : ""}
    </div>
  );
};

export default Noriginal;
