import PropTypes from "prop-types";

const Cards = ({ logements }) => {
  return (
    logements.map((logement) => (
      <div className="cards" key={logement.id}>
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </div>
    ))
  );
};

Cards.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Cards;