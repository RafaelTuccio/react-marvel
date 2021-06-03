import {render, screen } from '@testing-library/react';
import Hero from "./index";

describe("<Hero />", () => {
    it("deve renderizar normalmente", () => {
        const { debug } = render(<Hero />)
    })

    it("deve dar match com o snapshot", () => {
        
        const { container } = render(<Hero />);
        expect(container.firstChild).toMatchSnapshot();
    })
})