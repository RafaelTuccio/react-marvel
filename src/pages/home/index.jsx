import { useState, useEffect } from "react";
import FormHero from "../../components/FormHero.jsx/FormHero";
import HomeHeader from "../../components/Headers/HomeHeader";
import Filter from "../../components/Filtros/Filtro";
import Heroes from  "../../components/Heroes/Heroes";
import { getHeroes, getHeroesFavoritos } from "../../service/apiService";
const Home = () => {
    let [heroes, setHeroes] = useState([])
    let [favorito, setFavorito] = useState(false);
    let [order, setOrder] = useState(false)
    

    const getOrder = () => {
        if(order){
            setOrder(false);
            getHeroes().then(result => {
                setHeroes(result)
            }).catch(err => console.error(err))
        }else{
            setOrder(true)
            getHeroes({order}).then(result => {
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
            let result = getHeroesFavoritos()
            //setHeroes(result)
        }
    }

    useEffect(() => {
        getHeroes().then(result => {
            setHeroes(result)
        })
        
    },[])

    return (
        <div className>
            <HomeHeader />
            <FormHero />
            <Filter order={order} getOrder={getOrder} favorito={favorito} showFavorito={showFavorito}/>
            <Heroes heroes={heroes}/>
        </div>
    );
}

export default Home;