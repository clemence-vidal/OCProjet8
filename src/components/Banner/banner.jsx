// import banner from "../../assets/banner.png"
import "./banner.scss"

function Banner({ imagePath, showParagraph }) {
    return (
        <div className="banner">
            <img src={imagePath} alt="banner" />
            {/* <img src={props.cover} alt="" /> */}
            {showParagraph && <p>Chez vous, partout et ailleurs</p>}
        </div>
    )
}

export default Banner;