import Favorito from "../Favorito/Favorito";

const HeroCard = (props) => {
    let hero = {
        name: "Spider-man",
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b"
        }
    };
    let extension = "/standard_fantastic.jpg";
    
    return(
        <ul className="card-hero">
            <li><img src={hero.thumbnail.path + extension} alt="foto heroi" /></li>
            <li className="card-legend">
                    <span>{hero.name}</span>
                    <Favorito />
            </li>
        </ul>
    );
}

export default HeroCard;