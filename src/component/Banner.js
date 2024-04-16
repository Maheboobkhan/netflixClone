import { useState, useEffect } from "react";
import "../component/Banner.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import BannerApi from "../component/BannerApi";

let storage;

const Banner = ({ func }) => {
  const [carousel, setCarousel] = useState(BannerApi);
  const [selectedimage, setSelectedimage] = useState(0);
  const [allimages, setAllimages] = useState([]);
  const [name, setName] = useState([]);
  const [desc, setDesc] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    console.log(BannerApi);
    setInterval(() => {
      setSelectedimage(Math.floor(Math.random() * allimages.length));
    }, 3000);
  }, []);

  for (let i = 0; i < carousel.length; i++) {
    name[i] = carousel[i].title;
    desc[i] = carousel[i].description;
    allimages[i] = carousel[i].backdrop_path;
  }

  const handleTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie.title)
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

  storage = trailerUrl;

  window.addEventListener("click", () => setTrailerUrl(""));

  const opts = {
    height: "500px",
    width: "100%",

    playerVars: {
      autoplay: 1,
    },
  };

  function truncate(str, n) {
    return str.length > n ? str.substring(0, 150) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={
        trailerUrl
          ? {
              marginBottom: "120px",
              backgroundSize: "cover",
              // backgroundImage: `url(https://image.tmdb.org/t/p/w500/${allimages[selectedimage]})`,
              backgroundImage: `url(${allimages[selectedimage]})`,
              backgroundPosition: "center",
            }
          : {
              marginBottom: "0px",
              backgroundSize: "cover",
              // backgroundImage: `url(https://image.tmdb.org/t/p/w500/${allimages[selectedimage]})`,
              backgroundImage: `url(${allimages[selectedimage]})`,
              backgroundPosition: "center",
            }
      }
    >
      <div className="banner-contents">
        <h1 className="banner-title">{name[selectedimage]}</h1>
        <div className="banner-buttons">
          <button
            className="banner-button"
            onClick={() => handleTrailer(carousel[selectedimage])}
          >
            Play
          </button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(desc[selectedimage], 150)}
        </h1>
      </div>
      {trailerUrl ? <Youtube videoId={trailerUrl} opts={opts} /> : ""}
    </div>
  );
};

const sended = {
  thisKey: storage,
};

export default Banner;
export { sended };
