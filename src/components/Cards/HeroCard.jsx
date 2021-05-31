import Favorito from "../Favorito/Favorito";

const HeroCard = (props) => {
    let { hero } = props
    let extension = "/standard_fantastic.jpg";
    
    return(
        <ul className="card-hero">
            <li ><img className="card-img" src={hero.thumbnail.path + extension} alt="foto heroi" /></li>
            <li className="card-legend">
                    <span>{hero.name}</span>
                    <Favorito />
            </li>
        </ul>
    );
}

export default HeroCard;