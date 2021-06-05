import ic_heroi from "../../assets/ic_heroi.svg"
import toggleOff from "../../assets/toggle_off.svg"
import toggleOn from "../../assets/toggle_on.svg"
import favoritoOff from "../../assets/favorito_02.svg"
import favoritoOn from "../../assets/favorito_01.svg"


const Filter = (props) => {
    let { favorito, filtro, getFiltro, showFavorito, count, total} = props;

    return(
       
            <div className="filtros-paginacao"> 
                <div className="paginacao">
                    <span>Encontrados {count} de {total} heróis</span>
                </div>
                <div className="filtros">
                    <img src={ic_heroi} alt="" />
                    <span className="filtro-span">Ordernar por nome - A/Z</span>
                    <div onClick={()=> {
                        getFiltro()
                    }}>
                        {
                            filtro === false ?
                            <img src={toggleOff} alt="botao desligado" />
                            : <img src={toggleOn} alt="botao ligado" />
                        }
                    </div>
                </div>
                <div className="favoritos">
                    <div onClick={() => {
                        showFavorito()
                    }}>
                        {
                            favorito === false ?
                            <img src={favoritoOff} alt="coracao branco" />
                            : <img src={favoritoOn} alt="coracao vermelho" />
                        }
                    </div>
                        <span className="favoritos-span">Somente favoritos</span>
                </div>
                
            </div>
    );
}

export default Filter;