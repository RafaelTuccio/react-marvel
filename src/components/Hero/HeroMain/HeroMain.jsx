import HeroData from '../Cards/HeroData';
import HeroImg from '../HeroImage/HeroImg';
import Comics from "../Comics/Comics";

const HeroMain = (props) => {
    let {hero, img, extension, comics} = props;
    return(
        <>
            <div className="hero-main">
                <HeroData hero={hero}/>
                <HeroImg img={img} extension={extension} title={hero.name}/>
            </div>
            <span className="section-titulo">Últimos lançamentos</span>
            <Comics comics={comics}/>
       </>
    )
}

export default HeroMain;