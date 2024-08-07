import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Cards from '../Cards/Cards';
import logements from '../../../logements.json';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="body">
        <div className="en-tete">
          <Navbar />
        </div>
          <Banner bannerNumber={1} />
        <div className="gallery">
          <Cards logements={logements} />
        </div>
      </div>
      <div className="pied-de-page">
        <Footer />
      </div>
    </>
  );
}