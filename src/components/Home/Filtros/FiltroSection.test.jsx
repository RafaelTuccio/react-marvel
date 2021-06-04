import { render, screen } from '@testing-library/react';
import FiltroSection from './FiltroSection';

describe("<FiltroSection />", () => {
    it("deve renderizar na tela normalmente", () => {
        const { debug } = render(<FiltroSection />)

        debug();
    })

    it("deve dar match com o snapshot", () => {
        
        const { container } = render(<FiltroSection />);
        expect(container.firstChild).toMatchSnapshot();
    })


})