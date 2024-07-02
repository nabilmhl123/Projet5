

export default function Banner({ bannerNumber }) {
  const imageUrl1 = '/src/assets/e270fc8fc902a1eb738458e7b29c1899.jpg';
  const imageUrl2 = '/src/assets/kalen-emsley-Bkci_8qcdvQ-unsplash%202.jpg';
  const title1 = "Chez vous, partout et ailleurs";

  return (
    <div className="grande-banniere">
      {bannerNumber === 1 && (
        <div className="banniere">
          <img className="banner1-img" src={imageUrl1} alt={title1} />
          <div className="textcontainer">
            <h1 className="banner1-title">{title1}</h1>
          </div>
          <div className="overlay"></div>
        </div>
      )}
      {bannerNumber === 2 && (
        <div className="banniere">
          <img className="banner2-img" src={imageUrl2}  />
          <div className="textcontainer">
            <h1 className="banner2-title"></h1>
          </div>
          <div className="overlay"></div>
        </div>
      )}
    </div>
  );
}