import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logements from "./../../../logements.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const renderRatingStars = (rating) => {
    const stars = [];
    // Boucle pour créer 5 étoiles
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

const findLogementId = (id) => {
    return logements.find((logement) => logement.id === id);
};

const Logement = () => {
    const { id } = useParams();
    const logement = findLogementId(id);
    const cover = logement.cover;
    const { name, picture } = logement.host;
    const [firstName, lastName] = name.split(" ");
    const location = logement.location;
    const tags = logement.tags;
    const rating = logement.rating;

    return (
        <div>
            <Navbar />
            <div className="coverimage">
                {cover && <img src={cover} alt="cover de la page" />}
            </div>
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
                <div className="bouton"> {/* Mapping sur les tags pour créer un bouton pour chaque tag */}
                {tags.map((tag, index) => (
                    <button key={index}>{tag}</button> 
                ))} </div>
                {/* Affichage du rating sous forme d'étoiles */}
                <div className="rating"><p>{renderRatingStars(rating)}</p></div>
            </div>
        </div>
    );
};

export default Logement;