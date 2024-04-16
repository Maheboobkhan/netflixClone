import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Noriginal from "./component/Noriginal";
import Row from "./component/Row";
import allApi from "./component/Practice";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner func={allApi.fetchNetflixTopRated} />
      <Noriginal
        title="Netflix Originals"
        func={allApi.fetchNetflixOriginals}
      />
      <Row title="Trending Now" func={allApi.fetchNetflixTrending} />
      <Row title="Top Rated" func={allApi.fetchNetflixTopRated} />
      <Row title="Action Movies" func={allApi.fetchNetflixAction} />
      <Row title="Horror Movies" func={allApi.fetchNetflixHorror} />
    </div>
  );
}

export default App;
