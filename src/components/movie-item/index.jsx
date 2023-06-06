import "./index.css";
import { Link } from "react-router-dom";
const MovieItem = (props) => {
  const { item } = props;
  const { id, img, name, rating } = item;
  return (
    <Link to={`/${id}`}>
      <li className="movie-item">
        <img src={img} alt="movie-image" />
        <h3>{name}</h3>
        <p>{rating}</p>
      </li>
    </Link>
  );
};

export default MovieItem;
