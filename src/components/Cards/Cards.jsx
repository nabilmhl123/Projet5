import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ logements }) => {
  return (
    logements.map((logement) => (
      <Link to={`/logement/${logement.id}`} className="cards" key={logement.id}>
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </Link>
    ))
  );
};

Cards.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Cards;