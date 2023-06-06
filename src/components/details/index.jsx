import React, { useEffect, useState } from "react";
import Header from "../header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
const Details = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const apiCall = async () => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${params.id}`);
    const updateData = {
      img: res.data.image.medium,
      name: res.data.name,
      genres: res.data.genres,
      status: res.data.status,
      rating: res.data.rating.average,
      officialSite: res.data.officialSite,
      summary: res.data.summary,
    };
    setData(updateData);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <Header />
      <div className="main">
        <div className="movie-details">
          {data === {} ? (
            ""
          ) : (
            <>
              <img src={data.img} alt="show-image" />
              <div>
                <h2>{data.name}</h2>
                {data.genres &&
                  data.genres.map((each) => (
                    <span key={crypto.randomUUID()}>{each}</span>
                  ))}
                <p>
                  <b>Status: </b>
                  {data.status}
                </p>
                <p>Rating: {data.rating}</p>
                <p>
                  officialSite:{" "}
                  {<Link to={data.officialSite}>{data.officialSite}</Link>}
                </p>
                <div dangerouslySetInnerHTML={{ __html: data.summary }} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
