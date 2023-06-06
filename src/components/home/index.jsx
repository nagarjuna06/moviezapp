import { useEffect, useState } from "react";
import Header from "../header";
import axios from "axios";
import MovieItem from "../movie-item";
import "./index.css";
const Home = () => {
  const [data, setData] = useState([]);
  const apiCall = async () => {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    const updatedData = res.data.map((each) => ({
      id: each.show.id,
      img: each.show.image.medium,
      name: each.show.name,
      rating: each.show.rating.average,
    }));
    setData(updatedData);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <Header />
      <ul className="movies-list">
        {data
          ? data.map((each) => (
              <MovieItem key={crypto.randomUUID()} item={each} />
            ))
          : "Loading....."}
      </ul>
    </>
  );
};

export default Home;
