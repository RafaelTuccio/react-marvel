import favoritoOff from '../assets/favorito_02.svg'
import favoritoOn from '../assets/favorito_01.svg'
import Favorito from "../Favorito/Favorito";

const HeroCard = (props) => {
    let { hero, favoritar } = props;
    //let [favorito, setFavorito] = props;
    let tamanho = "/standard_fantastic.";
    
    return(
        <div className="card-heroi">
            <img src={hero.thumbnail.path + tamanho + hero.thumbnail.extension} alt="foto heroi" />
            <div className="card-heroi-footer">
                    <span>{hero.name}</span>

                    <div onClick={() => {
                        favoritar(hero);
                        
                        if(false){
                            //setFavorito(false)
                        }else{
                            //setFavorito(true)
                        }
                    }}>
                        {
                            false === false ?
                            <img src={favoritoOff} alt="coracao branco" />
                            :<img src={favoritoOn} alt="coracao vermelho" />
                        }
                    </div>

            </div>
        </div>
    );
}

export default HeroCard;