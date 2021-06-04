import {useHero} from '../../service/useHero';
import ErrorComponent from './ErrorComponent';

const Transicao = () => {
    
    let  { load } = useHero();
    
    return(
        <div>
            <div className="container-error">
        {
            
                load === true ?
                <h1>Carregando....</h1>
                :<ErrorComponent />
        }
            </div>
        
        </div>
    );
}

export default Transicao;