import { useState } from "react";
import ic_busca from "../assets/ic_busca.svg";
import search_vermelho from "../assets/search_bar_vermelho.svg";


const FormHero = (props) => {
    let [name, setName] = useState("")
    let [error, setError] = useState("")
    let { heroHandle } = props

    return(
        <form className="container-column"
            onSubmit={(e) => {
            e.preventDefault();
            if(name){
                heroHandle({name});
            }else{
                setError("digite o nome de um heróis para começar a procurar")
            }
            
        }}>
            <div>
                <img src={search_vermelho} alt="barra de busca" />
            </div>
            <label htmlFor=""><img src={ic_busca} alt="" /></label>
            <input type="text" 
            placeholder="procure por heróisi" 
            value={name}
            onChange={(e) => {
                setName(e.target.value);
                setError(null)
            }}
            />
            <span className="error">{error}</span>
        </form>
    );
}

export default FormHero;