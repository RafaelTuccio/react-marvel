import ComicCard from "../Cards/ComicCard";

const Comics = (props) => {
    let { comics } = props
    return (
        <section>
            <div>
                <h1>Últimos lançamentos</h1>
            </div>
            {
                comics.map((comic) => {
                    return <ComicCard comic={comic}/>
                })
            }
        </section>
    );
}

export default Comics;