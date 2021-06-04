import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroCard from './HeroCard';


const hero = {
    id: 1011334,
    name: "3-D Man",
    description: "",
    modified: "2014-04-29T14:18:17-0400",
    thumbnail: {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        extension: "jpg"
    }

}


const index = 1
const count = 1
const setCount = ""


describe("<HeroCard />", () => {
    it("deve renderizar normalmente", () => {
        const fn = jest.fn()
        const fnn = jest.fn()
        const { debug } = render(<HeroCard key={hero.id} 
            hero={hero} index={index} 
            count={count} setCount={setCount} 
            compareFavoritos={fn} 
            favoritar={fnn}/>)

            debug();
    })
    it("deve comparar com o snapshot", () => {
        const fn = jest.fn()
        const fnn = jest.fn()
        const { container } = render(<HeroCard key={hero.id} 
            hero={hero} index={index} 
            count={count} setCount={setCount} 
            compareFavoritos={fn} 
            favoritar={fnn}/>);
        expect(container.firstChild).toMatchSnapshot();
    })

    it("deve funcionar o oneClick", () => {
        const fn = jest.fn()
        render(<HeroCard onClick={fn}/>)
        
        fireEvent.click(<HeroCard />);
        expect(fn).toHaveBeenCalled()
    })
})