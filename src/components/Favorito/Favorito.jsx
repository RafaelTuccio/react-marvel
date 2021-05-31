import favoritoOff from "../assets/favorito_02.svg";
import favoritoOn from "../assets/favorito_01.svg";
import { useContext, useState } from "react";
import { setHeroesFavoritos } from "../../service/apiService";
import { FavoritoContext } from "../../service/useFavorito";
const Favorito = (props) => {
    let { hero, favoritar } = props
    let [favorito, setFavorito] = useState(false)

    
    return(
        <div onClick={() => {
            favoritar(hero);
            
            if(favorito){
                setFavorito(false)
            }else{
                setFavorito(true)
            }
        }}>
            {
                favorito === false ?
                <img src={favoritoOff} alt="coracao branco" />
                :<img src={favoritoOn} alt="coracao vermelho" />
            }
        </div>
    );
}

export default Favorito;