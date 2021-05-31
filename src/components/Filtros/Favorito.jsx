import favoritoOff from "../assets/favorito_02.svg";
import favoritoOn from "../assets/favorito_01.svg";

const Favorito = (props) => {
    let {favorito, showFavorito} = props

    return(
        <div className="filter-favorito">
            <div onClick={() => {
                showFavorito()
            }}>
                {
                    favorito === false ?
                    <img src={favoritoOff} alt="coracao branco" />
                    : <img src={favoritoOn} alt="coracao vermelho" />
                }
            </div>
                <span>Somente favoritos</span>
        </div>
    );
}

export default Favorito;