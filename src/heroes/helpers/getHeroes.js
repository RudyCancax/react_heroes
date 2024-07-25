import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) =>{
    const publishers = ['Marvel Comics', 'DC Comics'];
    if (publishers.includes(publisher)) {
        return heroes.filter(hero => hero.publisher === publisher);
    }

    throw new Error(`publisher ${publisher} not found`);
}

export function getHeroesById(id) {
    return heroes.find(hero => hero.id === id);
}

export function getHeroesByName(name) {
    const hero =  heroes.filter(hero => hero.name === name);
    if (hero.length > 0) {
        return hero[0];
    }
    throw new Error(`hero name ${name} not found`);
}