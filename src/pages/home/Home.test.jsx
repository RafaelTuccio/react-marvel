import { render, screen } from '@testing-library/react';
import Home, {setHeroes, getFiltro, showFavorito} from '.';
import { mockHome } from '../home/mockHome';

const heroes = mockHome.data.results;

describe("<Home />", () => {
    it("deve renderizar a pagina home", () => {
        render(<Home />);
    })
    it("testando funcao getFiltro", () => {
        
        const value = heroes

        expect(setHeroes).toBe(heroes);
    })
})