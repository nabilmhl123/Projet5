import Navbar from "./../Navbar/Navbar";
import Collapse from './../Collapse/Collapse';
import data from './../../../collapse.json'; // Assurez-vous que le chemin vers votre fichier JSON est correct
import Footer from '../Footer/Footer';
import Banner from "../Banner/Banner";

export default function Apropos() {
  return (
    <>
      <div className="en-tete2">
        <Navbar />
      </div>
        <Banner bannerNumber={2}/>
      <div className="apropos">
        {data.map((item, index) => (
          <Collapse key={index} title={item.titre} content={item.texte} />
        ))}
      </div>
      <div className="pied-de-page">
        <Footer/>
        </div>
    </>
  );
}