import { createContext, useContext, useEffect, useState } from "react";
import { getHeroByName, getComic } from "./apiService";
import history from '../history';
export const HeroContext = createContext({})




export const HeroProvider = (props) => {
    let [autorizacao, setAutorizacao] = useState(false)
    let [hero, setHero] = useState([]);
    let [comics, setComics] = useState("");
    let [img, setImg] = useState("");
    let [extension, setExtension] = useState("");
    let [load, setLoad] = useState(false);
    let [err, setErr] = useState("")
    
    const heroHandle = (name) => {
        getHeroByName(name).then(result => {
            setLoad(false)
            setComics(result.comics)
            setHero(result.hero)
            setImg(result.hero.thumbnail.path);
            setExtension("."+ result.hero.thumbnail.extension)
            setAutorizacao(true);
            history.push("/hero");
        }
        
        ).catch(err => {
            setErr("heroi não encontrado")
        })
    }


    
    return (
    <HeroContext.Provider value={
        {
            autorizacao, 
            setAutorizacao, 
            heroHandle, 
            hero,
            comics,
            img,
            extension,
            load,
            setLoad,
            err,
        }}>
        {
                props.children
        }
    </HeroContext.Provider>
    );
}

export const useHero = () => useContext(HeroContext);