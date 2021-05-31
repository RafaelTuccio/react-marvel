import favoritoOff from "../assets/favorito_02.svg";
import favoritoOn from "../assets/favorito_01.svg";

const Favorito = () => {
    const favorito = false;
    return(
        <div>
            {
                favorito === false ?
                <img src={favoritoOff} alt="coracao branco" />
                :<img src={favoritoOn} alt="coracao vermelho" />
            }
        </div>
    );
}

export default Favorito;