import toggleOn from "../assets/toggle_on.svg";
import toggleOff from "../assets/toggle_off.svg";

const OrderbyAlph = (props) => {
    let { order, getOrder} = props;
    return(
        <div onClick={()=> {
            getOrder()
        }}>
            {
                order === false ?
                <img src={toggleOff} alt="botao desligado" />
                : <img src={toggleOn} alt="botao ligado" />
            }
        </div>
    );
}

export default OrderbyAlph;