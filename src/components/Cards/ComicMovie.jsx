import ic_comic from "../assets/ic_quadrinhos.svg";
import ic_filme from "../assets/ic_trailer.svg";
import avaliacaoOn from "../assets/avaliacao_on.svg";
import avaliacaoOff from "../assets/avaliacao_off.svg";

const ComicMovie = (props) => {
    
    return(
        <div>
            <div>
                <span>Quadrinho</span>
                <div>
                    <img src={ic_comic} alt="icone comic" />
                    <span>3000</span>
                </div>
            </div>
            <div>
                <span>Filmes</span>
                <div>
                    <img src={ic_filme} alt="icone triler" />
                    <span>40</span>
                </div>
            </div>
            <div>
                <span><strong>Rating:</strong></span>
                <img src={avaliacaoOn} alt="icone estrela" />
            </div>
            <span><strong>Último quadrinho</strong></span>
            <span>13 fev. 2020</span>
        </div>
    );

}

export default ComicMovie;