import HeroHeader from "../../components/Hero/Header/HeroHeader";
import FormHero from "../../components/Hero/Form/FormHero";
import HeroMain from '../../components/Hero/HeroMain/HeroMain';
import { useHero } from "../../service/useHero";
import Transicao from '../../components/Error/Transicao';


const Hero = () => {
    let {hero, comics, img, extension, autorizacao} = useHero();
  
    
    console.log("pagina do heros: ",hero)

    
    
    return(
        <div>
            <HeroHeader />
            <div>
                <FormHero />
                <div className="hero-container">
                    {
                        autorizacao === true ?
                        <HeroMain hero={hero} img={img} extension={extension} comics={comics}/>
                        :<Transicao />
                    }
                </div>
            </div>
        </div>
    );
   
}

export default Hero;