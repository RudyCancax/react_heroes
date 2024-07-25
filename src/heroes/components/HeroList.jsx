import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "../components";

export const HeroList = ( { publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
    console.log(heroes);

    return (
        <div className="flex flex-wrap justify-center mt-2">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero} />
                ))
            }
        </div>
    )
}
