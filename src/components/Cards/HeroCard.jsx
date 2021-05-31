
import Favorito from "../Favorito/Favorito";

const HeroCard = (props) => {
    let { hero, favorito, favoritar } = props
    let tamanho = "/standard_fantastic.";
    
    return(
        <ul className="card-hero">
            <li ><img className="card-img" src={hero.thumbnail.path + tamanho + hero.thumbnail.extension} alt="foto heroi" /></li>
            <li className="card-legend">
                    <span>{hero.name}</span>
                    <Favorito hero={hero} favorito={favorito} favoritar={favoritar}/>
            </li>
        </ul>
    );
}

export default HeroCard;