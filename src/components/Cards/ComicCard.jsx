const ComicCard = (props) => {
    let comic = {
        name: "spider man"
    }

    return(
        <div>
            <img src={comic} alt="quadrinhos de superheróis" />
            <span><strong>{comic.name}</strong></span>
        </div>
    )
}

export default ComicCard;