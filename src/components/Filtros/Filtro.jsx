
import Favorito from "./Favorito";
import OrderbyAlph from "./Order";
import Pagination from "./Pagination";


const Filter = (props) => {
    let { favorito, order, getOrder, showFavorito} = props

    

    return(
        <div className="filter">
            <div className="filter-control">
                <Pagination />
            </div>
            <div className="filter-control">
                <OrderbyAlph order={order} getOrder={getOrder}/>
                <Favorito favorito={favorito} showFavorito={showFavorito} />
            </div>
        </div>
    );
}

export default Filter;