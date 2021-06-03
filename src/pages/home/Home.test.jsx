import { render, screen } from '@testing-library/react';
import Home from '.';


describe("<Home />", () => {
    it("deve renderizar perfeitamente", () =>{
        const { debug } = render(<Home /> )
    })
})