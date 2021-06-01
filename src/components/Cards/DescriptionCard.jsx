import Favorito from "../Favorito/Favorito";


const DescriptionCard = (props) => {
    let hero = {
        name: "spider-man",
        description: "Hulk esmaga homenzinho"
    }


    return(
        <div>
            <div>
                <span><strong>{hero.name}</strong></span>
                <Favorito />
            </div>
            <div>
                <p>{hero.description}</p>
            </div>
        </div>
    );
}

export default DescriptionCard;