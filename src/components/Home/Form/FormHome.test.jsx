import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormHome from './FormHome';

describe("<FormHome />", () => {
    it("deve renderizar normalmente na tela", () => {
        const {debug} = render(<FormHome />)
        debug()
    })

    it("deve chamar a função onChange toda ver que uma tecla for pressionada no input", () => {
        const fn = jest.fn();
        render(<FormHome heroHandle={fn}/>)
        const input = screen.getByPlaceholderText(/Procure por um herói/i)
        const value = "spider-man{enter}";

        userEvent.type(input, value)
        expect((fn)).toHaveBeenCalledTimes(1)
    })

    it("deve dar match com o snapshot", () => {
        const fn = jest.fn();
        const { container } = render(<FormHome heroHandle={fn}/>);
        expect(container.firstChild).toMatchSnapshot();
    })



    
})