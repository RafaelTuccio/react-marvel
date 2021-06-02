import { useContext, useEffect, useState } from "react";
import { FavoritoContext, useFavorito } from "../../service/useFavorito";
import HeroCard from "../Cards/HeroCard";


const Heroes = (props) => {
    let { heroes } = props
    let [favorito, setFavorito] = useState(false)
    let { saveFavoritos } = useFavorito()
    let { favoritos } = useFavorito()
    let [count, setCount] = useState(0)
    
    

    const favoritar = (hero) => {
        //console.log("favoritei: ", id)
        saveFavoritos(hero)
    }

    const compareFavoritos = (list, id) => {
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id){
                return true
            }
        }
        return false
    }
    // const inicializaCount = (lista) => {
    //     if(lista.length !== 0){
    //         setCount(lista.length - 5)
    //     }
    // }
    
    useEffect(() => {
        //inicializaCount(favoritos)
        console.log("vindo do heroes", count)
    }, [count])

    return(
        <section className="sessao-herois">
            {
                heroes.map((hero, index) => {
                   
                    return <HeroCard key={hero.id} hero={hero} index={index} count={count} setCount={setCount} compareFavoritos={compareFavoritos} favoritar={favoritar}/>
                })
            }
        </section>
    );
}

export default Heroes;