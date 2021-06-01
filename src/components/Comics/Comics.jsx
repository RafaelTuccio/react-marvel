import ComicCard from "../Cards/ComicCard";

const Comics = (props) => {
    let comics = [1, 3, 4, 5, 6]
    return (
        <section>
            <div>
                <h1>Últimos lançamentos</h1>
            </div>
            {
                comics.map((comic) => {
                    return <ComicCard />
                })
            }
        </section>
    );
}

export default Comics;