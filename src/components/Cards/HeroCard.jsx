
import Favorito from "../Favorito/Favorito";

const HeroCard = (props) => {
    let { hero, favorito, favoritar } = props
    let tamanho = "/standard_fantastic.";
    
    return(
        <div className="card-hero">
            <div ><img className="card-img" src={hero.thumbnail.path + tamanho + hero.thumbnail.extension} alt="foto heroi" /></div>
            <div className="card-legend">
                    <span>{hero.name}</span>
                    <Favorito hero={hero} favorito={favorito} favoritar={favoritar}/>
            </div>
        </div>
    );
}

export default HeroCard;