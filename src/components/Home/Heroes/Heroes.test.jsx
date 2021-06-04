import { render, screen } from '@testing-library/react';
import { FavoritoProvider } from '../../../service/useFavorito';
import Heroes from './Heroes';
import { mockHome } from "../../../pages/home/mockHome";
import {setCount} from '../../../service/useFavorito';

const heroes = mockHome.data.results;

describe("<Heroes />" , () => {
    it("deve renderizar normalmente", () => {
        const { debug } = render(<Heroes heroes={heroes}/>)
        debug()
    })
    it("deve renderizar normalmente", () => {

        
        render(<Heroes heroes={heroes}/>)
        
    })
})