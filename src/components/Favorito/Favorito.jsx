import favoritoOff from "../assets/favorito_02.svg";
import favoritoOn from "../assets/favorito_01.svg";
import { useState } from "react";

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