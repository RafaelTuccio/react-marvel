import { useContext, useEffect, useState } from 'react';

export const HeroContext = useContext({})

export const HeroProvider = (props) => {
    const [favoritos, setFavoritos] = useState([]);
    useEffect(() => {
    
    },[])

    return (
        <HeroContext.Provider value={{favoritos, setFavoritos}} >
            {props.children}
        </HeroContext.Provider>
    )
}
