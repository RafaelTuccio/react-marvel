import HeroHeader from "../../components/Hero/Header/HeroHeader";
import HeroData from "../../components/Cards/HeroData";
//import ComicMovie from "../../components/Cards/ComicMovie";
//import ComicCard from "../../components/Cards/ComicCard/ComicCard";
import Comics from "../../components/Comics/Comics";
import { useState } from "react";
import { getHeroByName } from "../../service/apiService";
import FormHero from "../../components/Hero/Form/FormHero";
import HeroImg from "../../components/Hero/HeroImage/HeroImg";
import ErrorComponent from "../../components/Error/ErrorComponent";

const Hero = () => {
    
    let [hero, setHero] = useState([])
    let [comics, setComcis] = useState([])
    let [img, setImg] = useState("")
    let [extension, setExtension] = (useState(""))
    let [error, setError] = useState(false)
    
    
    const heroHandle = (name) => {
        getHeroByName(name).then(result => {
            setComcis(result.comics)
            setHero(result.hero)
            setImg(result.hero.thumbnail.path);
            setExtension("."+ result.hero.thumbnail.extension)
        }
        
        ).catch(err => {
            console.error(err)
            setError(true)
        })
    }
    
    return(
        <div>
            <HeroHeader />
            <div>
                <FormHero heroHandle={heroHandle} />
                <div className="hero-container">
                    <div className="hero-main">
                        <HeroData hero={hero}/>
                        <HeroImg img={img} extension={extension} title={hero.name}/>
                    </div>
                    <span className="section-titulo">Últimos lançamentos</span>
                    <Comics comics={comics}/>
                </div>
            </div>
        </div>
    );
}

export default Hero;