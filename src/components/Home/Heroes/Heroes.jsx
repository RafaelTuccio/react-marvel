
import { useFavorito } from "../../../service/useFavorito";
import HeroCard from "../Cards/HeroCard";


const Heroes = (props) => {
    let { heroes } = props
    let { saveFavoritos } = useFavorito()
    let { count, setCount } = useFavorito()


    const favoritar = (hero) => {
        let result = saveFavoritos(hero)
        setCount(result)

    }


    const compareFavoritos = (list, id) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                return true
            }
        }
        return false
    }



    return (
        <section className="sessao-herois">
            {
                heroes.map((hero, index) => {

                    return <HeroCard key={hero.id}
                        hero={hero} index={index}
                        count={count} setCount={setCount}
                        compareFavoritos={compareFavoritos}
                        favoritar={favoritar}
                    />
                })
            }
        </section>
    );
}

export default Heroes;