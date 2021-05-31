import { useState } from "react";
import Favorito from "./Favorito";
import OrderbyAlph from "./Order";
import Pagination from "./Pagination";

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
        <div className="filter">
            <Pagination />
            <div className="order-favorito">
                <OrderbyAlph order={order} getOrder={getOrder}/>
                <Favorito favorito={favorito} showFavorito={showFavorito}/>
            </div>
        </div>
    );
}

export default Filter;