import { useState } from 'react'
import { useHero } from '../../../service/useHero'

import ic_busca from '../../assets/ic_busca.svg'

const FormHero = (props) => {
    let [name, setName] = useState("")
    let [error, setError] = useState("")
    let {heroHandle, setAutorizacao, setLoad} = useHero();
    return(
        <div>
            <form className="form-hero"
                onSubmit={(e) => {
                e.preventDefault();
                if(name){
                    heroHandle({name});
                    setLoad(true)
                    setName("")
                    setAutorizacao(false)
                }else{
                    setError("digite o nome de um herói para começar a procurar!!!")
                }
                
            }}>
                <input type="text" 
                    placeholder="Procure por um herói"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError(null)
                    }}
                />
                <img src={ic_busca} alt="icone de lupa" />
            </form>
            <div className="box-error">
                <span className="error">{error}</span>
            </div>
        </div>
    );
}

export default FormHero;