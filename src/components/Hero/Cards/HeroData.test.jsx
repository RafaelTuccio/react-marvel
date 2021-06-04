import { render, screen } from '@testing-library/react';
import heroMock from '../../../pages/hero/mockHero'
import HeroData from './HeroData';

const hero = heroMock;

describe("<HeroData />", () => {
    it("deve renderizar na tela normalmente", () => {
        const { debug } = render(<HeroData hero={hero}/>)
        debug();
    })

    it("deve dar match com o snapshot",() => {
        const { container } = render(<HeroData hero={hero}/>)
        expect(container.firstChild).toMatchSnapshot();
    })
    

})