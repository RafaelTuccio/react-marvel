import { render, screen } from '@testing-library/react';
import { heroMock } from '../../../pages/hero/mockHero';
import HeroImg from './HeroImg';

const hero = heroMock;

const img = hero.thumbnail.path;
const extension = hero.thumbnail.extension;

describe("<HeroImg />", () => {
    it("deve renderizar na tela", () => {
        const {debug} = render(<HeroImg img={img} extension={extension} title={hero.name}/>)
        debug()
    })

    it("deve dar match com o snapshot", () => {
        const { container } = render(<HeroImg img={img} extension={extension} title={hero.name}/>);
        expect(container.firstChild).toMatchSnapshot();
    })
})