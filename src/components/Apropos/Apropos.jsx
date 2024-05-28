import Navbar from "./../Navbar/Navbar";
import Collapse from './../Collapse/Collapse';
import data from './../../../collapse.json'; // Assurez-vous que le chemin vers votre fichier JSON est correct
import Footer from '../Footer/Footer';

export default function Apropos() {
  return (
    <>
      <div className="en-tete2">
        <Navbar />
      </div>
      <div className="banner2">
        <img src="./../../../src/assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg" alt="image2" />
      </div>
      <div className="apropos">
        {data.map((item, index) => (
          <Collapse key={index} title={item.titre} content={item.texte} />
        ))}
      </div>
      <div className='pieddepage'>
        <Footer/>
      </div>
    </>
  );
}