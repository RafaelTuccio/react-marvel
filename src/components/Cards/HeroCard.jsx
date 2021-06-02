import { useEffect, useState } from "react";
import favoritoOff from '../assets/favorito_02.svg';
import favoritoOn from '../assets/favorito_01.svg';
import { useFavorito } from "../../service/useFavorito";




const HeroCard = (props) => {
    let { hero, favoritar, compareFavoritos, count, setCount } = props;
    let [favorito, setFavorito] = useState(false);
    let {favoritos } = useFavorito()
    let tamanho = "/standard_fantastic.";
   

    

    useEffect(() => {
       
        if(favoritos){
            setFavorito(compareFavoritos(favoritos, hero.id))
            
        }
        
        
    },[])

   
    
    
    
     return(
        <div className="card-heroi">
            <img src={hero.thumbnail.path + tamanho + hero.thumbnail.extension} alt="foto heroi" />
            <div className="card-heroi-footer">
                <span>{hero.name}</span>
                <div onClick={() => {
                    favoritar(hero);
                    if(!favorito && count < 5){
                        setFavorito(true)
                        if(count < 5){
                            setCount(count + 1)
                        }
                        localStorage.setItem("count", JSON.stringify(count))
                        //setCount(count - 1)
                      
                    }
                    else{
                        setFavorito(false)
                        localStorage.setItem("count", JSON.stringify(count))
                        if(count > 0){
                            setCount(count - 1)
                        }
                    }
                }}>
                        {
                            favorito === false ?
                            <img src={favoritoOff} alt="coracao branco" />
                            :<img src={favoritoOn} alt="coracao vermelho" />
                        }
                    </div>
            </div>
        </div>
    );
}

export default HeroCard;