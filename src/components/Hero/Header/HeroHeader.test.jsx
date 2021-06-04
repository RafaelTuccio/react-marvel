import { render, screen } from '@testing-library/react';
import HeroHeader from './HeroHeader';


describe("<HeroHeader />", () => {
    it("deve renderizar normalmente", () => {
        const { debug } = render(<HeroHeader />)
        debug();
        expect(screen.getByRole("img", {name: "logo marvel"}));
        
        
    })

    it("deve dar match com o snapshot", () => {
        const { container } = render(<HeroHeader />);
        expect(container.firstChild).toMatchSnapshot();
    })
    
})