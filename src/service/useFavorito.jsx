import React, { createContext, useContext, useEffect, useState } from "react";

export const FavoritoContext = createContext({});

export const FavoritoProvider = (props) => {
    let [favoritos, setFavoritos] = useState([]);

    
    useEffect(() => {
        setFavoritos(JSON.parse(localStorage.getItem("listFavoritos")));
    }, [])

    const saveFavoritos = (hero) => {
        console.log(hero.id);
        let listFavoritos = JSON.parse(localStorage.getItem("listFavoritos")) || [];
        let index = listFavoritos.indexOf(hero.id);
        if(index === -1){
            console.log("diferente")
            if(listFavoritos.length < 5){
                console.log("tem menos que 5")
                listFavoritos.push(hero.id);
                localStorage.setItem("listFavoritos", JSON.stringify(listFavoritos));
            }    
        }else{
            console.log("ja tem o item");
            listFavoritos.splice(index, 1);
            localStorage.setItem("listFavoritos", JSON.stringify(listFavoritos));
        }
    }

    const getFavoritos = () => {
        return favoritos;
    }
    
    return(
        <FavoritoContext.Provider value={{favoritos, setFavoritos, saveFavoritos, getFavoritos}}>
            {
                props.children
            }
        </FavoritoContext.Provider>
    )
}
