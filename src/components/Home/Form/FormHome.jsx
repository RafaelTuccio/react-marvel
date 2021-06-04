import {  useState } from "react";
import { useHero } from '../../../service/useHero';
import ic_busca from "../../assets/ic_busca.svg";



const FormHome = (props) => {
    let [name, setName] = useState("")
    let [error, setError] = useState("")
    let { heroHandle } = useHero();
    

    return(
        <div>
            <form className="form-group"
                onSubmit={(e) => {
                e.preventDefault();
                if(name){
                    heroHandle({name});
                }else{
                    setError("digite o nome de um herói para começar a procurar!!!")
                }
                
            }}>
                <label htmlFor=""><img src={ic_busca} alt="" /></label>
                <input type="text" 
                placeholder="Procure por um herói" 
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setError(null)
                }}
                />
            </form>
            <div className="box-error">
                <span className="error">{error}</span>
            </div>
        </div>
    );
}

export default FormHome;