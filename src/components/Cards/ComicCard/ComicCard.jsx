const ComicCard = (props) => {
    let { comic } = props;
    let tamanho = "/portrait_incredible.";

    return(
        <div className="comic-card">
            <div className="comic-img">
                <img src={comic.thumbnail.path + tamanho + comic.thumbnail.extension} alt={comic.title} />    
            </div>
            <div className="comic-footer">
            <span><strong>{comic.title}</strong></span>
            </div>
        </div>
    );
}

export default ComicCard;