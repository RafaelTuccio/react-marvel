import toggleOn from "../assets/toggle_on.svg";
import toggleOff from "../assets/toggle_off.svg";
import ic_heroi from "../assets/ic_heroi.svg"


const OrderbyAlph = (props) => {
    let { order, getOrder} = props;
    return(
        <div className="filter-order">
            <img src={ic_heroi} alt="" />
            <span>Ordernar por nome - A/Z</span>
            <div onClick={()=> {
                getOrder()
            }}>
                {
                    order === false ?
                    <img src={toggleOff} alt="botao desligado" />
                    : <img src={toggleOn} alt="botao ligado" />
                }
            </div>
        </div>
    );
}

export default OrderbyAlph;