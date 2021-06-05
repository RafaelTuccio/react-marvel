import { useState, useEffect } from "react";
import FormHome from '../../components/Home/Form/FormHome';
import HomeHeader from "../../components/Home/Header/HomeHeader";
import Filter from "../../components/Home/Filtros/FiltroSection";
import Heroes from  "../../components/Home/Heroes/Heroes";
import { getHeroes } from "../../service/apiService";
import {useFavorito } from "../../service/useFavorito";


const Home = () => {
    let [heroes, setHeroes] = useState([]);
    let [favorito, setFavorito] = useState(false);
    let [filtro, setFiltro] = useState(false);
    let [count, setCount] = useState("");
    let [total, setTotal] = useState("");
    let [offset, setOffset] = useState("");
    let { getFavoritos} = useFavorito();

    const getFiltro = () => {
        if(filtro){
            setFiltro(false);
            getHeroes().then(result => {
                setHeroes(result.heroes);
                setCount(result.count);
                setTotal(result.total);
                setOffset(result.offset);

            }).catch(err => console.error(err))
        }else{
            setFiltro(true)
            getHeroes({filtro}).then(result => {
                setHeroes(result.heroes);
                setCount(result.count);
                setTotal(result.total);
                setOffset(result.offset);
                
            }).catch(err => console.error(err))
        }
    }

    const showFavorito = () => {

        if(favorito){
            setFavorito(false);
            getHeroes().then(result => {
                setHeroes(result.heroes);
                setCount(result.count);
                setTotal(result.total);
                setOffset(result.offset);
                
            }).catch(err => console.error(err))
        }else{
            setFavorito(true);
            let result = getFavoritos();
            setHeroes(result)
        }
    }


    useEffect(() => {
        getHeroes().then(result => {
            setHeroes(result.heroes);
            setCount(result.count);
            setTotal(result.total);
            setOffset(result.offset);
        })
        
    },[])

    
    

    return (
        <div>
            <HomeHeader />
            <div className="container-home">
                <FormHome />
                <Filter filtro={filtro} 
                getFiltro={getFiltro} 
                favorito={favorito} 
                showFavorito={showFavorito}
                count={count}
                total={total}/>
                <Heroes heroes={heroes}/>
            </div>
        </div>
    );
}

export default Home;