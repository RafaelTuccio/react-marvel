import HeroHeader from "../../components/Headers/HeroHeader";
import DescriptionCard from "../../components/Cards/DescriptionCard";
import ComicMovie from "../../components/Cards/ComicMovie";
import ComicCard from "../../components/Cards/ComicCard";
import Comics from "../../components/Comics/Comics";
import { useEffect, useState } from "react";
import { getHeroByName } from "../../service/apiService";

const Hero = () => {
    // let hero = {
    //     name: "",
    //     thumbnail: {
    //         path: ""
    //     }
    //}
    let [hero, setHero] = useState([])
    let [comics, setComcis] = useState([])
    
    const heroHandle = (name) => {
        getHeroByName(name).then(result => {
            setComcis(result.comics)
            setHero(result.hero)
        }
        
        ).catch(err => console.error(err))
    }
    console.log(hero.thumbnail)
    
    
    
    return(
        <div>
            <HeroHeader heroHandle={heroHandle}/>
            <div>
                <div>
                    <DescriptionCard hero={hero}/>
                    <ComicMovie />
                </div>
                <div>
                    {/* <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="foto heroi" /> */}
                </div>
            </div>
            <Comics comics={comics}/>
        </div>
    );
}

export default Hero;