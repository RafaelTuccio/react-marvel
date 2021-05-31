import { useState } from "react";
import Favorito from "./Favorito";
import OrderbyAlph from "./Order";

const Filter = () => {

    let [favorito, setFavorito] = useState(false);
    let [order, setOrder] = useState(false)

    const getOrder = () => {
        if(order){
            setOrder(false);
        }else{
            setOrder(true)
        }
    }

    const showFavorito = () => {

        if(favorito){
            setFavorito(false);
        }else{
            setFavorito(true);
        }
    }

    return(
        <div>
            <Favorito favorito={favorito} showFavorito={showFavorito}/>
            <OrderbyAlph order={order} getOrder={getOrder}/>
        </div>
    );
}

export default Filter;