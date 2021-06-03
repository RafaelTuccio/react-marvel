import { render, screen } from '@testing-library/react';
import HomeHeader from './HomeHeader';


describe("<HomeHeader />", () => {
    it("deve renderizar normalmente", () => {
        const { debug } = render(<HomeHeader />)
        debug();
        expect(screen.getByRole("img", {name: "logo marvel"}));
        
        
    })

    it("deve dar match com o snapshot", () => {
        const { container } = render(<HomeHeader />);
        expect(container.firstChild).toMatchSnapshot();
    })
})