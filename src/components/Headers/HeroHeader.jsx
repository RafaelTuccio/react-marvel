
import logo_menor from "../assets/logo_menor.svg";
import FormHero from "../FormHero.jsx/FormHero";

const HeroHeader = (props) => {
    let { heroHandle } = props
    return(
        <header>
            <img src={logo_menor} alt="" />
            <FormHero heroHandle={heroHandle}/>
        </header>
    );
}

export default HeroHeader;