import banner from "../../assets/banner.png"
import "./banner.scss"

function Banner(props) {
    return (
        <div className="banner">
            <img src={banner} alt="" />
            {/* <img src={props.cover} alt="" /> */}
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner;