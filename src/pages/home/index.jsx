
import FormHero from "../../components/FormHero.jsx/FormHero";
import HomeHeader from "../../components/Headers/HomeHeader";
import Filter from "../../components/Filtros/Filtro";
import Heroes from  "../../components/Heroes/Heroes";
const Home = () => {


    return (
        <div>
            <HomeHeader />
            <FormHero />
            <Filter />
           <Heroes />
        </div>
    );
}

export default Home;