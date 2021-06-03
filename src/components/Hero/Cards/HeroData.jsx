import favoritoOff from '../../assets/favorito_02.svg'
import favoritoOn from '../../assets/favorito_01.svg'
import ic_quadrinhos from '../../assets/ic_quadrinhos.svg'
import ic_trailer from '../../assets/ic_trailer.svg'
import avaliacao_on from '../../assets/avaliacao_on.svg'

const HeroData = (props) => {
    let { hero } = props;
    let favorito = false

    return(
        <div className="hero-dados">
            <div className="card-dados">
                <div className="hero-titulo">
                    <h1>{hero.name}</h1>
                    {
                        favorito === false ?
                        <img src={favoritoOn} alt="icone coracao"/>
                        :<img src={favoritoOff} alt="icone coracao"/>
                    }
                </div>
                <div className="descricao">
                    <p>{hero.description}</p>
                </div>
            </div>
            <div className="afins">
                <div className="quadrinhos">
                    <span>Quadrinhos</span>
                    <div>
                        <img src={ic_quadrinhos} alt="icone quadrinhos"/>
                        <span>3000</span>
                    </div>
                </div>
                <div className="filmes">
                    <span>Filmes</span>
                    <div>
                        <img src={ic_trailer} alt=""/>
                        <span>40</span>
                    </div>
                </div>
            </div>
            <div className="rating">
                <span><strong>Rating</strong></span>
                <img src={avaliacao_on} alt="icone estrela"/>
            </div>
            <div className="ultimo-lancamento">
                <span><strong>Último quadrinho: </strong></span>
                <span>13 fev 2020</span>
            </div>
        </div>
    );
}

export default HeroData;