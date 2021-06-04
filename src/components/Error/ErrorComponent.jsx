import {useState} from 'react';
import {useHero} from '../../service/useHero';
const ErrorComponent = (props) => {

    let {setLoad} = props;
    let [error, setError] = useState();
    let {autorizacao, load} = useHero();
    
    return(
        <div>
            <h1>Deu Ruin!</h1>
            <span>Nenhum heroi encontrado com este nome</span>
        </div>
    );
}

export default ErrorComponent;