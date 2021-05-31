import { useState, useEffect } from "react";
import FormHero from "../../components/FormHero.jsx/FormHero";
import HomeHeader from "../../components/Headers/HomeHeader";
import Filter from "../../components/Filtros/Filtro";
import Heroes from  "../../components/Heroes/Heroes";
import { getHeroes } from "../../service/apiService";
const Home = () => {
    let [heroes, setHeroes] = useState([])

    useEffect(() => {
        getHeroes().then(result => {
            setHeroes(result)
        })
        
    },[])

    return (
        <div className>
            <HomeHeader />
            <FormHero />
            <Filter />
            <Heroes heroes={heroes}/>
        </div>
    );
}

export default Home;