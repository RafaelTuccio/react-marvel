import { render, screen } from '@testing-library/react';
import Comics from './Comics';

import { comicMock } from '../../../pages/hero/mockComic';

const comics = comicMock;


describe("<Comics />", () => {
    it("deve renderizar o componente Comics perfeitamente", () => {
      const {debug} = render(<Comics comics ={comics.data.results}/>)
      debug();
      expect(screen.findAllByText(/comic.title/i))
    })
    
    it("deve dar match com o snapshot", () => {
        const { container } = render(<Comics comics={comics.data.results} />);
        expect(container.firstChild).toMatchSnapshot();
    })
    
})