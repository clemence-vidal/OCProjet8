import Banner from "../../components/Banner/banner";
import DropdownMenu from "../../components/DropdownMenu/dropdownmenu";
import "./about.scss";
import banner from "../../assets/banner-about.png";

function About() {
    return (
        <div className="about-content">
            <Banner imagePath={banner} showParagraph={false} />
            <div className="about-dropdowns">
                <DropdownMenu title="Fiabilité" />
                <DropdownMenu title="Respect" />
                <DropdownMenu title="Service" />
                <DropdownMenu title="Sécurité" />
            </div>
        </div>
    )

}

export default About;