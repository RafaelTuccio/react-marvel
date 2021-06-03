import {render, screen } from '@testing-library/react';
import Hero from "./index";

describe("<Hero />", () => {
    it("deve renderizar normalmente", () => {
        const { debug } = render(<Hero />)
    })
})