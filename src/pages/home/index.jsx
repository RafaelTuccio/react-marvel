import { useState, useEffect, useContext } from "react";
import FormHero from "../../components/FormHero.jsx/FormHome";
import HomeHeader from "../../components/Headers/HomeHeader";
import Filter from "../../components/Filtros/FiltroSection";
import Heroes from  "../../components/Heroes/Heroes";
import { getHeroes } from "../../service/apiService";
import {useFavorito } from "../../service/useFavorito";

const Home = () => {
    let [heroes, setHeroes] = useState([])
    let [favorito, setFavorito] = useState(false);
    let [filtro, setFiltro] = useState(false)
    let { getFavoritos } = useFavorito();

    const getFiltro = () => {
        if(filtro){
            setFiltro(false);
            getHeroes().then(result => {
                setHeroes(result)
            }).catch(err => console.error(err))
        }else{
            setFiltro(true)
            getHeroes({filtro}).then(result => {
                setHeroes(result)
            }).catch(err => console.error(err))
        }
    }

    const showFavorito = () => {

        if(favorito){
            setFavorito(false);
            getHeroes().then(result => {
                setHeroes(result)
            }).catch(err => console.error(err))
        }else{
            setFavorito(true);
            let result = getFavoritos();
            setHeroes(result)
        }
    }

    useEffect(() => {
        getHeroes().then(result => {
            setHeroes(result)
        })
        
    },[])

    return (
        <div>
            <HomeHeader />
            <div className="container-home">
                <FormHero />
                <Filter filtro={filtro} getFiltro={getFiltro} favorito={favorito} showFavorito={showFavorito}/>
                <Heroes heroes={heroes}/>
            </div>
        </div>
    );
}

export default Home;