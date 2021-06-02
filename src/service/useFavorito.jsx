import React, { createContext, useContext, useEffect, useState } from "react";

export const FavoritoContext = createContext({});

export const FavoritoProvider = (props) => {
    let [favoritos, setFavoritos] = useState([]);
    
    
    useEffect(() => {
        setFavoritos(JSON.parse(localStorage.getItem("listFavoritos")));
    }, [])

    const compareFavoritos = (list, id) => {
        for(let i = 0; i < list.length; i++){
            if(list[i].id === id){
                
                return {
                    index: i,
                    exist: true,
                }
            }
        }
        return {
            index: false,
            exist: false    }
    }

    const saveFavoritos = (hero) => {
        let listFavoritos = JSON.parse(localStorage.getItem("listFavoritos")) || [];
        let result = compareFavoritos(listFavoritos, hero.id);
        console.log(result)
        if(!result.exist){
            if(listFavoritos.length < 5) {
                listFavoritos.push(hero);
                localStorage.setItem("listFavoritos", JSON.stringify(listFavoritos));
                

            }
        }else{
            listFavoritos.splice(result.index, 1);
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

export const useFavorito = () => useContext(FavoritoContext);