import HeroHeader from "../../components/Headers/HeroHeader";
import DescriptionCard from "../../components/Cards/DescriptionCard";
import ComicMovie from "../../components/Cards/ComicMovie";
import ComicCard from "../../components/Cards/ComicCard";
import Comics from "../../components/Comics/Comics";

const Hero = () => {
    let hero = {
        thumbnail: {
            path: "",
            extension: ""
        }
    }
    return(
        <div>
            <HeroHeader />
            <div>
                <div>
                    <DescriptionCard />
                    <ComicMovie />
                </div>
                <img src={hero.thumbnail.path} alt="" />
            </div>
            <Comics />
        </div>
    );
}

export default Hero;