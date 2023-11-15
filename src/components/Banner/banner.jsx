// import banner from "../../assets/banner.png"
import './banner.scss';

function Banner({ imagePath, showParagraph }) {
  return (
    <div className="banner">
      <img src={imagePath} alt="banner" />
      <p>{showParagraph}</p>
    </div>
  );
}

export default Banner;
