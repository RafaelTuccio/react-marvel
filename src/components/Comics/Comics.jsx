import ComicCard from "../Cards/ComicCard/ComicCard";

const Comics = ({comics}) => {
    return (
        <div className="hero-section">
            {
                comics.map((comic) => {
                    return <ComicCard key={comic.id} comic={comic}/>
                })
            }
        </div>
    );
}

export default Comics;