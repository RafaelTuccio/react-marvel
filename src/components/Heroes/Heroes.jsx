import HeroCard from "../Cards/HeroCard";


const Heroes = (props) => {
    let { heroes } = props

    return(
        <section className="card-container">
            {
                heroes.map((hero) => {
                    return <HeroCard key={hero.id} hero={hero}/>

                })
            }
        </section>
    );
}

export default Heroes;