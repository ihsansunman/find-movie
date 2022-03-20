import "./App.scss";
import { useEffect, useState } from "react";
import List from "./components/List";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Row } from "reactstrap";

function App() {
  const API_KEY = "bbabd65672e05337de3e2ba6253a6e91";
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const [movieDetail, setMovieDetail] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data.results);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="movie-list">
      <h3>Now Playing:</h3>
      <Row xs="1" sm="2" md="4">
      {movieDetail.filter(x=>x.title.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
        <List
          key={index}
          popupId={"popper"+index}
          title={item.title}
          overview={item.overview}
          vote={item.vote_average}
          date={item.release_date}
          poster={IMG_API + item.poster_path}
        />
      ))}
      </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
