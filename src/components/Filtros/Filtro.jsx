
import Favorito from "./Favorito";
import OrderbyAlph from "./Order";
import Pagination from "./Pagination";
import { getHeroesFavoritos } from "../../service/apiService";

const Filter = (props) => {
    let { favorito, order, getOrder, showFavorito} = props

    

    return(
        <div className="filter">
            <Pagination />
            <div className="order-favorito">
                <OrderbyAlph order={order} getOrder={getOrder}/>
                <Favorito favorito={favorito} showFavorito={showFavorito} />
            </div>
        </div>
    );
}

export default Filter;