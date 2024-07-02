import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logements from "./../../../logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from "../Collapse/Collapse";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";

const renderRatingStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        key={i}
        className={i < rating ? "star-filled" : "star-empty"}
      />
    );
  }
  return stars;
};

const findLogementById = (id) => {
  return logements.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementById(id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const cover = logement.cover;
  const { name, picture } = logement.host;
  const [firstName, lastName] = name.split(" ");
  const location = logement.location;
  const tags = logement.tags;
  const rating = logement.rating;

  return (
    <div>
      <Navbar />
      {/* <div className="coverimage">
        {cover && <img src={cover} alt="cover de la page" />}
      </div> */}
      <div className="carousel-container">
        <Carousel images={logement.pictures} />
      </div>
      <div className="grid-container">
      <div className="logement-info">
        <div className="logement-title">
          <h2>{logement.title}</h2>
        </div>
        <div className="host-info">
          <div className="host-name">
            <p>
              {lastName}
              <br />
              {firstName}
            </p>
          </div>
          {picture && <img src={picture} alt={`Picture of ${name}`} />}
        </div>
      </div>
      <div className="location">{location}</div>
      <div className="notation">
        <div className="bouton">
          {tags.map((tag, index) => (
            <button key={index}>{tag}</button>
          ))}
        </div>
        <div className="rating"><p>{renderRatingStars(rating)}</p></div>
      </div>
      <div className="collapse-buttons">
        <Collapse title="Description" content={logement.description} />
        <Collapse 
          title="Équipements" 
          content={
            <div>
              {logement.equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            </div>
            
          } 
        />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Logement;