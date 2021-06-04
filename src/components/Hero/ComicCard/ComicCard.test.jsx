import { render, screen } from '@testing-library/react';
import ComicCard from './ComicCard';
import { comicMockUnica } from './mockComic';


const comic = comicMockUnica;

describe("<ComicCard />", ()=> {
    it("deve renderizar normalmente na tela", () => {
        const {debug} = render(<ComicCard comic={comic}/>);
        debug()
        expect(screen.getByRole("img", {name: comic.title}));
        expect(screen.getByText("Immortal Hulk (2018) #43"));
        
    })

    it("deve dar match com o snapshot", () => {
        const { container } = render(<ComicCard comic={comic} />);
        expect(container.firstChild).toMatchSnapshot();
    })
    
})