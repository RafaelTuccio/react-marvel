import { useState } from 'react'
import ic_busca from '../assets/ic_busca.svg'

const FormHero = (props) => {
    let [name, setName] = useState("")
    let {heroHandle} = props
    return(
        <form className="form-hero"
        onSubmit={(e) => {
            e.preventDefault();
        }}
        >
            <input type="text" 
                placeholder="Procure por um herói"
                value={name}
                onChange={(e) =>{
                    setName(e.target.value)
                    heroHandle("hulk")
                }}
            />
            <img src={ic_busca} alt="icone de lupa" />
        </form>
    );
}

export default FormHero;