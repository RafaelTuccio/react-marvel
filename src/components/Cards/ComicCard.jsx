const ComicCard = (props) => {
    let { comic } = props
    let tamanho = "/portrait_incredible."

    return(
        <div>
            <img src={comic.thumbnail.path + tamanho + comic.thumbnail.extension} alt="quadrinhos de superheróis" />
            <span><strong>{comic.title}</strong></span>
        </div>
    )
}

export default ComicCard;