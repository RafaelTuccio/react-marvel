import axios from "axios";


export const getHeroes = async () => {
    try{
        let url = "http://gateway.marvel.com/v1/public/characters?";
        let limit = "limit=1";
        let offset = "&offset=1";
        let orderBy = "&orderBy=-name";
        let ts = "&ts=1622054338";
        let apikey = "&apikey=924ede14a9e9d54b76b557eb701ddf4c";
        let hash = "&hash=0ddec45d15e5daf65919c9ef98e48a06";
        let heroes = await axios.get(url + orderBy + ts + apikey + hash);
        return heroes.data.data.results
    }catch(err){
        console.error(err);
    }
}

export const getHeroByName = async ({name}) =>{
    try{
        let url = "http://gateway.marvel.com/v1/public/characters?";
        //let name = "name=spider-man";
        let ts = "&ts=1622054338";
        let apikey = "&apikey=924ede14a9e9d54b76b557eb701ddf4c";
        let hash = "&hash=0ddec45d15e5daf65919c9ef98e48a06";
        let hero = await axios.get(url + "name=" + name + ts + apikey + hash);
        console.log(hero.data.data.results[0])
        return hero.data.data.results[0];
    }catch(erro){
        console.log(erro);
        return erro
    }
}