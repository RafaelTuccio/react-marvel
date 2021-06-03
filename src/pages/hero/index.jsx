import { useState } from "react";
import { getHeroByName } from "../../service/apiService";
import HeroHeader from "../../components/Hero/Header/HeroHeader";
import HeroData from "../../components/Hero/Cards/HeroData";
import Comics from "../../components/Hero/Comics/Comics";
import FormHero from "../../components/Hero/Form/FormHero";
import HeroImg from "../../components/Hero/HeroImage/HeroImg";


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