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
                    heroHandle({name})
                }}
            />
            <img src="assets/ic_busca.svg" alt="icone de lupa" />
        </form>
    );
}

export default FormHero;