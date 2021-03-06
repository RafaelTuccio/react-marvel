import axios from "axios";


export const getHeroes = async (order) => {
    try{
        let url = "http://gateway.marvel.com/v1/public/characters?";
        let orderBy = "&orderBy=-name";
        let ts = "&ts=1622054338";
        let apikey = "&apikey=924ede14a9e9d54b76b557eb701ddf4c";
        let hash = "&hash=0ddec45d15e5daf65919c9ef98e48a06";
        if(order){
            let heroes = await axios.get(url + orderBy + ts + apikey + hash);
            return {heroes:heroes.data.data.results, data: heroes.data}
        }else{
            let heroes = await axios.get(url + ts + apikey + hash);
            return {
                    heroes: heroes.data.data.results,
                    limit: heroes.data.data.limit,
                    count: heroes.data.data.count,
                    offset: heroes.data.data.offset,
                    total: heroes.data.data.total,
                }

        }
    }catch(err){
        console.error(err);
    }
}




export const getHeroByName = async ({name}) =>{
    try{
        let url = "http://gateway.marvel.com/v1/public/characters?";
        let ts = "&ts=1622054338";
        let apikey = "&apikey=924ede14a9e9d54b76b557eb701ddf4c";
        let hash = "&hash=0ddec45d15e5daf65919c9ef98e48a06";
        let hero = await axios.get(url + "name=" + name + ts + apikey + hash);
        let id = hero.data.data.results[0].id
        let urlComic = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?limit=10&orderBy=-onsaleDate&ts=1622054338&apikey=924ede14a9e9d54b76b557eb701ddf4c&hash=0ddec45d15e5daf65919c9ef98e48a06`
        let comics = await axios.get(urlComic)
        console.log(hero)
        return {hero: hero.data.data.results[0], comics: comics.data.data.results}
    }catch(erro){
        console.log(erro);
        return erro
    }
}



