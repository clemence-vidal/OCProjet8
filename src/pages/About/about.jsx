import Banner from "../../components/Banner/banner";
import DropdownMenu from "../../components/DropdownMenu/dropdownmenu";
import "./about.scss";

function About() {
    return (
        <div className="about-content">
            <Banner />
            <div className="about-dropdowns">
                <DropdownMenu />
                <DropdownMenu />
                <DropdownMenu />
                <DropdownMenu />
            </div>
        </div>
    )

}

export default About;