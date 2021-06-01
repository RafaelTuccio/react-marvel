
import logo_menor from "../assets/logo_menor.svg";
import FormHero from "../FormHero.jsx/FormHero";

const HeroHeader = () => {
    return(
        <header>
            <img src={logo_menor} alt="" />
            <FormHero />
        </header>
    );
}

export default HeroHeader;