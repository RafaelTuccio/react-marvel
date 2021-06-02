import ComicCard from "../Cards/ComicCard";

const Comics = (props) => {
    let { comics } = props;
    return (
        <div className="hero-section">
            {
                comics.map((comic) => {
                    return <ComicCard comic={comic}/>
                })
            }
        </div>
    );
}

export default Comics;