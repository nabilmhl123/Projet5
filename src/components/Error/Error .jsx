import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

export default function Error() {
  return (
    <div>
    <Navbar />
    <div className="error-content">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <h4><Link to="/" element={<Home/>}>Retourner sur la page d'accueil </Link></h4>
    </div>
    <div className="custom-footer">
    <Footer />
    </div>
  </div>
);
}