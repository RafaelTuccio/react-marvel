import HeroHeader from "../../components/Headers/HeroHeader";
import HeroData from "../../components/Cards/HeroData";
import ComicMovie from "../../components/Cards/ComicMovie";
import ComicCard from "../../components/Cards/ComicCard";
import Comics from "../../components/Comics/Comics";
import { useEffect, useState } from "react";
import { getHeroByName } from "../../service/apiService";
import FormHero from "../../components/FormHero.jsx/FormHome";
import HeroImg from "../../components/Heroes/HeroImg";

const Hero = () => {
    
    let [hero, setHero] = useState([])
    let [comics, setComcis] = useState([])
    
    const heroHandle = (name) => {
        getHeroByName(name).then(result => {
            setComcis(result.comics)
            setHero(result.hero)
            console.log(hero)
        }
        
        ).catch(err => console.error(err))
    }
    console.log(hero.thumbnail)
    
    
    
    return(
        <div>
            <HeroHeader heroHandle={heroHandle}/>
            <div>
                <FormHero heroHandle={heroHandle}/>
                <div className="hero-container">
                    <div className="hero-main">
                        <HeroData hero={hero}/>
                        {
                            hero === true?
                            <HeroImg hero={hero}/>
                            : <div></div>
                        }
                    </div>
                    <span className="section-titulo">Últimos lançamentos</span>
                    <Comics comics={comics}/>
                </div>
            </div>
        </div>
    );
}

export default Hero;