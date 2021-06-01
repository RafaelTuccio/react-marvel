import { useContext, useEffect, useState } from "react";
import { FavoritoContext } from "../../service/useFavorito";
import HeroCard from "../Cards/HeroCard";


const Heroes = (props) => {
    let { heroes } = props
    let [favorito, setFavorito] = useState(false)
    let { favoritos, setFavoritos, saveFavoritos} = useContext(FavoritoContext);

    const favoritar = (hero) => {
        //console.log("favoritei: ", id)
        saveFavoritos(hero)
        if(favorito){
            setFavorito(false)
        }else{
            setFavorito(true)
        }
    }

    useEffect(() => {

    })

    return(
        <section className="sessao-herois">
            {
                heroes.map((hero) => {
                    return <HeroCard key={hero.id} hero={hero} favorito={favorito} favoritar={favoritar}/>

                })
            }
        </section>
    );
}

export default Heroes;